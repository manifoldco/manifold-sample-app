"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _nodeSes = _interopRequireDefault(require("node-ses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SESKEY: AWS Access Key ID for SES-capable IAM user
// SESSECRET: AWS Secret Access Key for SES-capable IAM user
const client = _nodeSes.default.createClient({
  key: process.env.SESKEY,
  secret: process.env.SESSECRET
});

exports.client = client;