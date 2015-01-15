var mongoose = require('mongoose');
// var path = require('path');

// specify the address of the local db
mongoose.connect('mongodb://localhost/shortlydb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('Mongdb connection is open');
});

// for MongoDB (which is 'schemaless at the DB level'), the schema
// is defined at the interface (mongoose);
exports.userSchema = mongoose.Schema({
  username: String,
  password: String
});

exports.linkSchema = mongoose.Schema({
  url: String,
  base_url: String,
  // code: Number,
  title: String,
  visits: Number
});
