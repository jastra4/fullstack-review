const queryAPI = require('../helpers/github.js');
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // chunk data and pass to github helper asyncronosly
  var pingAPI = function(callback) {
    var gitHandle = '';
	  req.on('data', function( chunk ) {
	    gitHandle += chunk;
	    callback(gitHandle);
	  });  	
  }
  pingAPI(queryAPI.getReposByUsername);
 
  // This route should take the github username provided
  // and get the repo information from the github API, then

  // save the repo information in the database

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

