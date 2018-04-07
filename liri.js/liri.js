// require the .env file with access tokens

require("dotenv").config();

//store dependencies as variables.
var keys = require('./keys.js');
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fs = require('fs');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


//request movies from OMBD API
var request = require('request');
request(' http://www.omdbapi.com/?i=tt3896198&apikey=dde7a2ab', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
