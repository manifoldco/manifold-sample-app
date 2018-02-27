/**
 * passport-local strategy
 * -> https://github.com/jaredhanson/passport-local
 */

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { User } from './database';

/* Passport */

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (req, email, password, done) =>
      User.findOne({ where: { email } }, (err, user) => {
        if (err) return done(err);
        if (!user)
          return done(
            null,
            false,
            req.flash('loginMessage', 'No user found with email / password.')
          );
        if (!user.verifyPassword(password))
          return done(
            null,
            false,
            req.flash('loginMessage', `Incorrect password for ${email}.`)
          );
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
