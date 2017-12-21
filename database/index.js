const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// Connection Notification
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});


let repoSchema = mongoose.Schema({
	id: Number,
	name: String,
  description: String,
  html_url: String,
  created_at: String,
  updated_at: String,
  score: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
	repos.forEach(function(repo) {
	// data fields:
	// repo.html_url
	// repo.created_at
	// repo.updated_at
	// repo.score
	// repo.description
	// repo.name
	// repo.id   
	});

	//console.log('SAVE: ', repos);
}

module.exports.save = save;

// to start running mongodb
// from terminal root: mongod --dbpath data/db