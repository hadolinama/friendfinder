// DEPENDENCY: required for this file to work
var path = require("path");

// Exporting app folder for FRONT-END
module.exports = function(app) {

    // HTML GET Requests: handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content:handles FRONT-END .For backend refer to apiRoutes.js file
    //The 2 html files(home.html and survey.html) are in the public folder . The ../is for rootfolder(friendFinder)and app folder(parent)
    //You could say home and survey's parent is app and grandparent is friendFinder
    app.get("/home", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  };