const queryAPI = require('../helpers/github.js');
const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/index.js');

let app = express();

app.use(bodyParser())
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', function (req, res) {
  queryAPI.getReposByUsername(req.body, function(repos) {
    db.save(repos);
    res.sendStatus(201);
  });	
});


app.get('/repos', function (req, res) {

  db.Repo.find()
  .then(function(result) {
   console.log('GET request to mongodb ran successfully: ', result);
   res.send(result);
   res.sendStatus(200);
  });

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

