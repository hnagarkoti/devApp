var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: String,
  age: String,
  phone: String,
  email: String
});


var User = mongoose.model('User', UserSchema);

module.exports = User;
