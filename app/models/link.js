var db = require('../config');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var linkSchema = mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
});

var Link = mongoose.model('Link', db.linkSchema);


linkSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});


module.exports = Link;
