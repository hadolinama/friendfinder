  // IMPORTING from friends.js file
var friendsData = require("../data/friends.js");

  // EXPORTING app folder for backend
module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page. ie What happens in the BACK-END
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

    console.log("friendsdata from survey.html", req.body);
    // Note the code here. Our "server" will respond to requests and let users know if they have a match
    // per data they entered.
    //It should recommed a friend based on survery answers
       friendsData.push(req.body);
       console.log("Here is your Match!", friendsData);
       //PSEUDOCODE::
       //creating a loop for userData.score after survey is filled out
      //  Create a 2nd loop to compared userdata against friendsData
      // Creating a variable to store the totaldifference
  });

  //This code clears the form out when page is refreshed so new form could be submitted
  app.post("/api/clear", function() {

    // Empty out the arrays of data
    friendsData = [];
    console.log(friendsData);
  });
};
