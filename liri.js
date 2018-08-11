//Module requirements
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

//Twitter and Spotify info from  keys.js
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

//Arguments to variables
var command = process.argv[2]

//if/else statement for argument commands 
if (command === 'my-tweets') {
    searchTwitter();
 } else if (command === 'spotify-this-song') {
    searchSpotify(process.argv[3]);
 } else if (command === 'movie-this') {
    searchMovie(process.argv[3]);
 } else if (command === 'do-what-it-says') {
    runFromFile('random.txt');
 } else {
     console.log('Error: Command not recognized.')
 }

 //Twitter function 
 function searchTwitter() {
    var params = {screen_name: 'code_Bae'};
    client.get('statuses/user_timeline', params, function(error, tweets) {
        if (!error) {
            var i = 0;
            console.log('\nHere are your last 20 tweets:\n')
            while (i < tweets.length && i <= 20) {
                console.log(tweets[i].text)
                console.log(tweets[i].created_at);
                console.log();
                i++;
            }
        } else {
            console.log("There was an error:");
            console.log(error);
        }
    });
}