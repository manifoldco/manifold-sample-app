import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';

import './config/passport';

/* Express */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

/* Routes */

app.use(express.static(path.resolve(__dirname, '..', './client')));
app.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/log-in-success') // this page isn’t password-protected to reduce the code in this example
);

app.listen(8080);
