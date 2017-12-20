const request = require('request');
const config = require('../config.js');

let getReposByUsername = (gitHandle) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
console.log('token: ', config.TOKEN);

  let options = {
    url: 'https://api.github.com/search/repositories?q=user:' + gitHandle,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request(options, function(error, response, body) {
    var info = JSON.parse(body);
    console.log(info);    
  });

  console.log('getReposByUsername gitHandle: ', gitHandle)
}

module.exports.getReposByUsername = getReposByUsername;