const request = require('request');
const config = require('../config.js');

let getReposByUsername = (gitHandle, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  gitHandle = gitHandle.user;
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/search/repositories?q=user:' + gitHandle,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      console.log(error);
    } else {
      var info = JSON.parse(body);
      callback(info.items);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;