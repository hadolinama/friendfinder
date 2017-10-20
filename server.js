
// DEPENDENCIES: Required to for app to work
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up the Express App
var app = express();

//port: the ff code
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//points the server to apiRoutes and htmlRoutes from the routing folder
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Server waits and is in Listening Mode
app.listen(PORT, function() {
    console.log("App listening on PORT, Ready for Commands: " + PORT);
  });
