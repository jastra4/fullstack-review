const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// Connection Notification
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});


let repoSchema = mongoose.Schema({
	id: {
		type: Number,
		unique: true,
		required: true
	},
	owner: String,
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
	    var id = repo.id;
	    Repo.findOne({id})
	    .then(function(result) {
	    	if (result === null) {
	    		createRepo(repo);
	    	}
	    	console.log('*********',result)
	    })
	    .catch(function(err) {
	    	console.log(err);
	    });

	    // create the model
	    function createRepo(repo) {
			  var newRepo = new Repo({
			  	id: repo.id,
			    owner: repo.owner.login,	
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
			    //console.log('newRepo.save ran.');
			  })
	    }
	});
}

module.exports.save = save;
module.exports.Repo = Repo;

// to start running mongodb
// from terminal root: mongod --dbpath data/db

// type mongo from data folder to launch mongo shell