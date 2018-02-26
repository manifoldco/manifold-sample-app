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
_passport.default.use('local', new _passportLocal.Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (email, password) => _database.User.findOne({
  'local.email': email
}, (err, user) => {
  if (err) return done(err);
  if (!user) return done(null, false, req.flash('loginMessage', 'No user found with email / password.'));
  if (!user.verifyPassword(password)) return done(null, false, req.flash('loginMessage', `Incorrect password for ${email}.`));
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