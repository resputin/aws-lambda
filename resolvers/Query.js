'use strict';
const User = require('../db/models/User');
const { authenticate } = require('../utils');

const requests = async (parent, args, context) => {
  const userId = authenticate(context);
  try {
    const user = await User.findOne({ _id: userId}).lean();
    return user.requests;
  } catch(err) {
    throw new Error(err);
  }
};

const request = async (parent, { _id }, context) => {
  const userId = authenticate(context);
  try {
    const user = await User.findOne({ _id: userId}).lean();
    const request = await user.requests.find(todo => todo._id.toString() === _id);
    return request;
  } catch(err) {
    throw new Error(err);
  }
};

module.exports = {
  request, requests
};