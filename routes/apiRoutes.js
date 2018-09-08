
var db = require("../models");
var passport = require("passport");




module.exports = function(app) {
  //Creates a new listing
  app.post("/newListing", function(req, res) {
    db.listing.create(req.body).then(() => res.end()).catch(console.error);
  });

  //Create a new user - correct one
  // app.post("/newUser", function(req, res) {
  //   db.user.create(req.body).then(() => res.end()).catch(console.error);
  // });

  //Testing for auth
  app.post("/newUser", function(req, res) {
    db.user.create(req.body).then(function(result){
      const user_id = result.id;
      req.login(user_id, function(err){
        res.redirect("userOptions");
      });
      //console.log("$$$$$$$$$$ " + user_id);
      });

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



  //Logging user and auth with passport
  app.post("/login", passport.authenticate('local', {
                      successRedirect: '/userOptions',
                      failureRedirect: '/login'
                    }
                  ));
  
//Log out user
app.get("/logout", function(req, res){
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

  //For displaying food
  app.get("/searchResults/:location/:food_type", function(req, res){
    db.listing.findAll({
      where:{
        serving_location: req.params.location,
        food_type: req.params.food_type
      }
    }).then( function(result){
      //console.log(result);
      //res.json(result);
    });
  });
};

//serelize and deserilize
passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});






