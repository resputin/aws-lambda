'use strict';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, select: false },
  requests: [
    {
      title: { type: String, required: true },
      content: { type: String, required: true }
    }
  ],
  candidates: [
    {
      content: { type: String, required: true },
      request: { type: mongoose.Schema.Types.ObjectId, required: true}
    }
  ]
});
const User = mongoose.model('user', userSchema);

module.exports = User;