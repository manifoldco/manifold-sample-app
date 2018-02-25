"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _database = require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * passport-local strategy
 * -> https://github.com/jaredhanson/passport-local
 */

/* Passport */
_passport.default.use(new _passportLocal.Strategy({
  usernameField: 'email'
}, (username, password, done) => _database.User.findOne({
  username
}, (err, user) => {
  if (err) return done(err);
  if (!user) return done(null, false);
  if (!user.verifyPassword(password)) return done(null, false);
  return done(null, user);
})));

_passport.default.serializeUser((user, done) => {
  done(null, user.id);
});

_passport.default.deserializeUser((id, callback) => _database.User.findOne({
  id
}, (err, user) => {
  if (err) return callback(err);
  return callback(user);
}));