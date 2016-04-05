var path = require('path');
var db = require(path.normalize(__dirname + '/db'));
var hooks = require(path.normalize(__dirname + '/hooks'));
var routes = require(path.normalize(__dirname + '/routes'));
var permissions = require(path.normalize(__dirname + '/permissions'));
var authorization = require(path.normalize(__dirname + '/authorization'));

module.exports =  {
  name: 'watchlist',
  permissions: permissions,
  routes: routes,
  authorization: authorization,
  hooks: hooks,
  db: db
};
