"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();
/* Config */


const sequelize = new _sequelize.default({
  database: process.env.PGDATABASE,
  dialect: 'postgres',
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port: process.env.PGPORT,
  username: process.env.PGUSER
});
/* Models */

const User = sequelize.define('user', {
  email: {
    allowNull: false,
    type: _sequelize.default.STRING(100),
    unique: true
  },
  password: {
    allowNull: false,
    type: _sequelize.default.STRING
  }
}, {
  instanceMethods: {
    generateHash: function (password) {
      return _bcrypt.default.hashSync(password, _bcrypt.default.genSaltSync(10), null);
    },
    validatePassword: function (password) {
      return _bcrypt.default.compareSync(password, this.password);
    }
  }
});
exports.User = User;
User.beforeCreate((user, options) => _bcrypt.default.hash(user.password, 10).then(hash => {
  user.password = hash;
}).catch(err => {
  throw new Error();
}));