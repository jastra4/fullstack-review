// Overview:
// user > client > server > database

// Front End:
// the user interacts with react components
// the search component communcates user intention to github.js 
// github.js sends a request to the back end

// Back End:
// sever index.js receives requests from the front end
// and routes the request either to github API or database index.js
// database index.js handles existing user data
// github API supplies new user data

// File structure:
// client
  // dist
    // bundle.js
    // index.html
  // src
    // components
      // RepoList.jsx
      // Search.jsx
    // index.jsx
// database
  // index.js
// helpers
  // github.js
// server
  // index.js

// File relationships:
// user > index.html > index.jsx > RepoList.jsx > Search.jsx > github.js > server index.js > github API
//																																			                   > database index.js