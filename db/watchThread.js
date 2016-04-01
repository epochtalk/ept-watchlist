var path = require('path');
var dbc = require(path.normalize(__dirname + '/db'));
var db = dbc.db;
var helper = dbc.helper;

module.exports = function(userId, threadId) {
  userId = helper.deslugify(userId);
  threadId = helper.deslugify(threadId);
  var q = 'INSERT INTO users.watch_threads (user_id, thread_id) VALUES ($1, $2)';
  return db.sqlQuery(q, [userId, threadId])
  .then(function() { return; });
};
