require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Require the .env file with access tokens
require('dotenv').config();
// OMDB
const omdb = require('./commands/omdb');
// Twitter
const twitter = require('./commands/twitter');
// Spotify
const spotify = require('./commands/spotify');
// help
const help = require('./commands/help');

const {log_command} = require('./commands/logger');
let command = process.argv[2];

// Set process index 3 to undefined if --say is passed before the any command, or without a command. This will ensure the user sees the help docs and not kill the node process.
let handle_song_movie = process.argv[3] === "--say" ? undefined : process.argv[3];
let options = {
	say: false
};

// IIFE that looks for --say to be passed as the fourth index item after with the movie command
(function (arguments) {
	arguments.find((item, index) => {
		if (command === 'movie' && index === 4 && item === '--say') {
			options.say = true;
		}
	});
}(process.argv));

// log command
log_command(process.argv);

// Call command that handle the movie, song, and spotify titles.
switch (command) {
	case ('tweets'):
		twitter(handle_song_movie, options);
		break;
	case ('spotify'):
		spotify(handle_song_movie, options);
		break;
	case ('movie'):
		omdb(handle_song_movie, options);
		break;
	default:
		help();
		break;
}