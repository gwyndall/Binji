import React, { Component } from "react";
import API from "../utils/API";

$(document).ready(function() {
  $("#searchButton").on("click", function(event) {
    event.preventDefault();

    var searchData = $("#searchField")
      .val()
      .trim();

    console.log(searchData);

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