let config = require('../config/index');
let mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);

// set environment variables
let env = process.env.NODE_ENV;

if (env === 'production') {
    // Using mongoose to connect to MLAB database (Create new database single node free and create new user and set name and password)
    const username = config.mongo.MONGO_USER
    const password = config.mongo.MONGO_PW
    mongoose.connect(`mongodb://${username}:${password}@testing.hjjs7.mongodb.net/Greybuilt?retryWrites=true&w=majority`)
  } else {
    mongoose.connect('mongodb://localhost:3000/clean_node'), {
      useMongoClient: true,
    };
  }
  
  // Signal connection
  mongoose.connection.once('open', function () {
    console.log('Connection has been made');
  }).on('error', function (error) {
    console.log('Connect error', error);
  }).on('disconnected', function () {
    console.log('Connection disconnected');
  })
  
  module.exports = mongoose