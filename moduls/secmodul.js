const mongoose = require('mongoose');

const secuserSchema = new mongoose.Schema({
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
  whatsappNumber: {
    type: Number,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  motherborder: {
    type: String,
    required: true,
  },
  processer: {
    type: String,
    required: true,
  }
});

const SecUser = mongoose.model('SecUser', secuserSchema);

module.exports = SecUser;
