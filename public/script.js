$(document).ready(function() {
  $("#searchButton").on("click", function(event) {
    event.preventDefault();
    var key = "d03fc0e64d561bfed0fdc80a54d08b43";

    var searchData = $("#searchField")
      .val()
      .trim();

    console.log(searchData);

    function searchBook() {
      var queryURL =
        "https://api.themoviedb.org/3/search/tv?api_key=" +
        key +
        "&language=en-US&query=" +
        searchData;

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
  });
});
