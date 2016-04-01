var Joi = require('joi');

/**
  * @apiVersion 0.4.0
  * @apiGroup Watchlist
  * @api {DELETE} /watchlist/threads/:id Unwatch Thread
  * @apiName UnwatchThread
  * @apiPermission User
  * @apiDescription Used to unmark a user as watching a thread.
  *
  * @apiUse WatchlistObjectPayload
  * @apiUse WatchlistObjectSuccess
  *
  * @apiError (Error 500) InternalServerError There was an issue unwatching the thread
  */
module.exports = {
  method: 'DELETE',
  path: '/api/watchlist/threads/{id}',
  config: {
    auth: { strategy: 'jwt' },
    validate: { params: { id: Joi.string().required() } },
    pre: [ { method: 'auth.watchlist.unwatchThread(server, auth)' } ],
  },
  handler: function(request, reply) {
    var userId = request.auth.credentials.id;
    var boardId = request.params.id;
    var promise = request.db.watchlist.unwatchThread(userId, boardId);
    return reply(promise);
  }
};
