require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require("express-session");
var keys = require("./keys");
console.log("######################################");
"'"+keys.aws.secretAccessKey+"'"

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3010;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

//For image upload #################################################################

var aws = require('aws-sdk'), // ^2.2.41
    multer = require('multer'), // "multer": "^1.1.0"
    multerS3 = require('multer-s3'); //"^1.4.1"
    secKey = keys.aws.secretAccessKey;
    accessKey = keys.aws.accessKeyId;
    region = keys.aws.region;

    console.log(accessKey + "this is a test");

aws.config.update({
  secretAccessKey: keys.aws.secretAccessKey ,
  accessKeyId: keys.aws.accessKeyId,
  region: keys.aws.region

});

var s3 = new aws.S3();
var fileName = function(){
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
  //req.session.fileName = req.files[0].key //Test
  // console.log(req.files[0].key);
  //Test for session
  //app.use(session({fileName : req.files[0].key})); 
  app.set('fileName',req.files[0].key );
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
