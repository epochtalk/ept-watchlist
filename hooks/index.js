function watchingBoard(request) {
  var userId;
  var boardId = request.query.board_id;
  if (request.auth.isAuthenticated) { userId = request.auth.credentials.id; }

  return request.db.watchlist.isWatchingBoard(boardId, userId)
  .then((watched) => { return { path: 'board.watched', data: watched }; });
}

function watchingThread(request) {
  var userId;
  var threadId = request.query.thread_id;
  if (request.auth.isAuthenticated) { userId = request.auth.credentials.id; }

  return request.db.watchlist.isWatchingThread(threadId, userId)
  .then((watched) => { return { path: 'thread.watched', data: watched }; });
}

module.exports = [
  { path: 'threads.byBoard.pre', method: watchingBoard },
  { path: 'posts.byThread.pre', method: watchingThread }
];