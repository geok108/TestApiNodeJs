'use strict';
module.exports = function(app) {
  var matchesList = require('../controllers/MatchController');

  // todoList Routes
  app.route('/matches')
    .get(matchesList.list_all_matches)
    .post(matchesList.create_a_match);


  app.route('/matches/:matchId')
    .get(matchesList.read_a_match)
    .put(matchesList.update_a_match)
    .delete(matchesList.delete_a_match);
};
