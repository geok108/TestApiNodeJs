'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Please enter a username'
  },
  firstname: {
    type: String,
    required: 'Please enter your first name'
  },
  lastname: {
    type: String,
    required: 'Please enter your last name'
  },
  password: {
    type: String,
    required: 'Please enter a password'
  }
});

module.exports = mongoose.model('User', UserSchema);
