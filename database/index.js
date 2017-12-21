const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// Connection Notification
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});


let repoSchema = mongoose.Schema({
  html_url: String,
  description: String,
  created_at: String,
  updated_at: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
	console.log('SAVE: ', repos);
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;

// to start running mongodb
// from terminal root: mongod --dbpath data/db