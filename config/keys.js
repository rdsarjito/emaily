// keys.js - figure out what see of credentials to return
if(process.env.NODE_ENV === 'production') {
  // we are in production - return the prod of keys
  module.exports = require('./prod');
} else{
  // we are in development - return the dev keys
  module.exports = require('./dev');
};




// ini pw emaily-dev
// GTMge0HrrugvXQib

// mongodb+srv://myuser:<password>@cluster0-erhjd.mongodb.net/test?retryWrites=true&w=majority