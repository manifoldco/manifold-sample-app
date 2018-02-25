"use strict";

var _database = require("../config/database");

_database.User.sync({
  force: true
}).then(() => {
  return _database.User.create({
    email: 'sample-app@manifold.co',
    password: 'verysecurepassword'
  });
});