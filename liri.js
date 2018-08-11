//Module requirements
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

//Twitter and Spotify info from  keys.js
var client = new Twitter(keys.twitterKeys);
var spotify = new Spotify(keys.spotify);

//Arguments to variables
var command = process.argv[2]

