/**
 * passport-local strategy
 * -> https://github.com/jaredhanson/passport-local
 */

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { User } from './database';

/* Passport */

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (username, password, done) =>
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      if (!user.verifyPassword(password)) return done(null, false);
      return done(null, user);
    })
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, callback) =>
  User.findOne({ id }, (err, user) => {
    if (err) return callback(err);
    return callback(user);
  })
);
