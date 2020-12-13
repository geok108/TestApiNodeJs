'use strict';

var mongoose = require('mongoose'),
  Match = mongoose.model('Match');

exports.list_all_matches = function(req, res) {
  Match.find({}, function(err, match) {
    if (err)
      res.send(err);
    res.json(match);
  });
};

exports.create_a_match = function(req, res) {
  var new_match = new Match(req.body);
  new_match.save(function(err, match) {
    if (err)
      res.send(err);
    res.json(match);
  });
};


exports.read_a_match = function(req, res) {
  Match.findById(req.params.matchId, function(err, match) {
    if (err)
      res.send(err);
    res.json(match);
  });
};


exports.update_a_match = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.matchId}, req.body, {new: true}, function(err, match) {
    if (err)
      res.send(err);
    res.json(match);
  });
};


exports.delete_a_match = function(req, res) {
  Match.remove({
    _id: req.params.matchId
  }, function(err, match) {
    if (err)
      res.send(err);
    res.json({ message: 'Match successfully deleted' });
  });
};
