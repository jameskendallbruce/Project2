require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var keys = require("./keys");
var Sequelize = require('sequelize');

// for user login and auth ##################################################
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var MySQLStore = require('express-mysql-session')(session);


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3010;

//################### ch3ck if cookie exists


// Middlewares ####################################
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

//Global variables ######################
// app.use(function(req, res, next){
//   res.app.locals.isAuthenticated = req.isAuthenticated();
//   next();
// });


// if(isAuthenticated == true){
//   console.log("7374347234724246278428746274627428476");
// }
//################################################

passport.use(new LocalStrategy(
  function (username, password, done) {
   // console.log(username);
    //console.log(password);

    db.user.findAll({
      where: {
        username: username,
        password: password
      }
    }).then(function (users) {
      if (users.length === 0) {
        return done(null, false);
      } else {
        //console.log("found user, the user is : " +  users.id);
        return done(null, {user_id : users.id});
        
      }
    });  
  }
));




//cookie parser
app.use(cookieParser());


//sequeilize use ########

var options = {
  host: 'w29ifufy55ljjmzq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'l4n27ek6nklu0j10',
  password: 'b6hyw0ogg2qlu7bg',
  database: 'p1xt46wkqjyqjhek'
};

var sessionStore = new MySQLStore(options);

//express session ##################
app.use(session({
  secret: 'ajkndajkdnajkdna',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());



//For image upload #################################################################

var aws = require('aws-sdk'), // ^2.2.41
  multer = require('multer'), // "multer": "^1.1.0"
  multerS3 = require('multer-s3'); //"^1.4.1"
secKey = keys.aws.secretAccessKey;
accessKey = keys.aws.accessKeyId;
region = keys.aws.region;

//console.log(accessKey + "this is a test");

aws.config.update({
  secretAccessKey: keys.aws.secretAccessKey,
  accessKeyId: keys.aws.accessKeyId,
  region: keys.aws.region

});

var s3 = new aws.S3();
var fileName = function () {
  var fileName = `${Date.now().toString()}.jpg`;
  return fileName;
}



var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'usersfoods/user-uploaded-food-images',
    key: function (req, file, cb) {
      cb(null, fileName()); //use Date.now() for unique file keys
      console.log(fileName());
    }
  })
});



//used by upload form
app.post('/imageUpload', upload.array('upl', 1), function (req, res, next) {
  res.redirect('/newListing/:' + req.files[0].key);
  app.set('fileName', req.files[0].key);
});





// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
