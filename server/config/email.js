"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _mailgunJs = _interopRequireDefault(require("mailgun-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client = (0, _mailgunJs.default)({
  apiKey: process.env.MAILGUN_APIKEY,
  domain: process.env.MAILGUN_DOMAIN
});
exports.client = client;