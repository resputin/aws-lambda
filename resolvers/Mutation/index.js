'use strict';

const AuthMutation = require('./AuthMutation');
const RequestMutation = require('./RequestMutation');

module.exports = {
  ...AuthMutation,
  ...RequestMutation
};