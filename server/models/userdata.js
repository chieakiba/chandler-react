import mongoose from 'mongoose'
var UserDataSchema = new mongoose.Schema({
  user: {type: firstName, required: true}
});

var Users = mongoose.model('Users', UserDataSchema);

module.exports = Users;
