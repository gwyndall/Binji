$(document).ready(function() {
  $("#searchButton").on("click", function(event) {
    event.preventDefault();

    var searchData = $("#searchField")
      .val()
      .trim();

    console.log(searchData);

    const API_KEY = process.env.REACT_APP_API_KEY;

    const BASEURL = "https://api.themoviedb.org/3/search/tv?api_key=";
    const QUERYURL = "&language=en-US&query="

    const queryURL = BASEURL + API_KEY + QUERYURL + query;

    function searchTV() {
      queryURL = queryURL.replace(/ /g, "%20");

      console.log(queryURL);

      var tvObject = {};

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        // Printing the entire object to console
        console.log(response);
      });
    }

    searchTV();
  });
});