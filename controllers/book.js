// Controller for our movie
// ========================
var db = require("../src/models");

module.exports = {
  // Add a new Movie to the db
  save: function(req, res) {
    db.Movie.save(req.body).then(function(dbMovie) {
      res.json(dbMovie);
    });
  },
  // View a specific Movie
  view: function(req, res) {
    db.Movie.view({ _id: req.params.id }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  },
  // Delete a Movie with a given id
  delete: function(req, res) {
    db.Movie.remove({ _id: req.params.id }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  }
}


