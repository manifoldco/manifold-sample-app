import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';

import './config/passport';
import { sendResetEmail } from './tasks/sendResetEmail';

/* Express */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

/* Routes */

app.use(express.static('./dist'));
app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/login-in-success', // this page isn’t password-protected to reduce the code in this example
    failureRedirect: '/?password-incorrect',
  })
);
app.post('/reset', (req, res) => {
  sendResetEmail(req.body.email);
  res.sendFile(path.resolve('./dist/reset/email-sent.html'));
});

app.listen(8080);
