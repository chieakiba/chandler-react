const mongoose = require('mongoose');

var UserDataSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'First name is required']},
  lastName: {type: String, require: [true, 'First name is required']},
  email: {type: String, require: [true, 'Email is required']},
  dateOfBirth: {type: Date, require: [true, 'Date of birth is required']}
});

module.exports = mongoose.model('Users', UserDataSchema);
