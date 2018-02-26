"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _passport = _interopRequireDefault(require("passport"));

require("./config/passport");

var _sendResetEmail = require("./tasks/sendResetEmail");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Express */
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)());
app.use(_passport.default.initialize());
app.use(_passport.default.session());
/* Routes */

app.use(_express.default.static(_path.default.resolve(__dirname, '..', 'client')));
app.post('/login', _passport.default.authenticate('local', {
  failureRedirect: '/login'
}), (req, res) => res.redirect('/log-in-success') // this page isn’t password-protected to reduce the code in this example
);
app.post('/reset', (req, res) => {
  (0, _sendResetEmail.sendResetEmail)(req.body.email);
  res.sendFile(_path.default.resolve(__dirname, '..', 'client', 'reset', 'email-sent.html'));
});
app.listen(8080);