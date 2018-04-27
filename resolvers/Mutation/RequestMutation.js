'use strict';
const mongoose = require('mongoose');
const User = require('../../db/models/User');
const { authenticate } = require('../../utils');

const { ObjectId } = mongoose.Types;

const createRequest = async (_, { content, title }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const user = await User.findOne({ _id: userId });
    
    const newRequest = { _id: new ObjectId(), content, title };

    user.requests.push(newRequest);

    user.save();
    return newRequest;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  createRequest
};