// Controller for our Saved Books
// ============================
var db = require("../models");

module.exports = {
// Route for getting all books from the db
  saved: function(req, res) {
    console.log("Saved clicked");
    // Using our Book model, "find" every book in our db
    db.books.find({})
      .then(function(dbBook) {
        // If any Books are found, send them to the client
        console.log("saved results: ", dbBook);
        res.json(dbBook);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  }
}