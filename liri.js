var keys = require('./keys.js');
var rs = require('readline-sync');
var npmTwitter = require('twitter');
var twit = require('twit');
var nodeTwitterAPI = require('node-twitter-api');
var request = require('request');
var nodeSpotifyAPI = require('node-spotify-api');var chalk = require('chalk');
var clear = require('clear');
var CLI = require('clui');
var figlet = require('figlet');
var inquirer = require('inquirer');
var Preferences = require('preferences');
var Spinner = CLI.Spinner;
var _ = require('lodash');
var touch = require('touch');
var fs = require('fs');
var client = new twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
  });


var command = rs.question('Would you like to (1) see your tweets, (2) find this song on Spotify, (3) search for a movie, or (4) run the code in random.txt? ');

switch (command) {
    case '1': //my-tweets
    
    var screenName = rs.question('Whose tweets would you like to see? ');
    var count = rs.question('How many tweets would you like to see? ');

    var queryUrl = request("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + screenName + '&count=' + count + '&exclude_replies=true' + '&include_rts=false' + '&trim_user=true'); 
    //console.log(queryUrl);
    console.log(request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log(JSON.stringify(body, null, 2));
        }
      }));
        break;
//    case '2': //spotify-this-song
//        break;
//    case '3': //movie-this
//        break;
//    case '4': //do-what-it-says
//        break;
    default:console.log("Oh, Cock")}

