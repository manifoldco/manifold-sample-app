"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendResetEmail = void 0;

var _email = require("../config/email");

const sendResetEmail = email => _email.client.sendEmail({
  to: email,
  from: 'support@myapp.com',
  subject: 'Reset Password for Sample App',
  message: 'Test sent successfully! There isn’t actually a reset link because this is only a demo.'
});

exports.sendResetEmail = sendResetEmail;