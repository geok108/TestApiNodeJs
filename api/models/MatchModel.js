'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new Schema({
  fighter_one: {
    type: String,
    required: 'Please enter the name of the first fighter'
  },
  fighter_two: {
    type: String,
    required: 'Please enter the name of the second fighter'
  },
  event_date: {
    type: Date
  }
});

module.exports = mongoose.model('Match', MatchSchema);
