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
    // check for duplicates 
    var key = repo.id;
    Repo.findOne({'id': key}, function(err, repo) {
    	if (err) {
    		console.log('not found');
    		createRepo(repo);
    	} else {
    		console.log(repo.name, ' repo already exists in db');
    		//createRepo(repo);
    	}
    })

    // create the model
    function createRepo(repo) {
    	//console.log(repo.owner.login);
		  var newRepo = new Repo({
		    owner: repo.owner.login,	
				id: repo.id,
				name: repo.name,
				description: repo.description,
				html_url: repo.html_url,
				created_at: repo.created_at,
				updated_at: repo.updated_at,
				score: repo.score
			});    	
		  // save to database
		  newRepo.save(function(err, newRepo) {
		    if (err) {
		    	return console.error(err);
		    }
		    console.log('newRepo.save ran successfully: ', newRepo);
		  })
    }
	});
}

module.exports.save = save;
module.exports.Repo = Repo;

// to start running mongodb
// from terminal root: mongod --dbpath data/db

// type mongo from data folder to launch mongo shell