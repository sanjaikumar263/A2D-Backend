const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  categories: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  whatsappNumber: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  investment: {
    type: String,
    required: true,
  },
});

const User =  mongoose.model('formdata', userSchema);

module.exports = User;
