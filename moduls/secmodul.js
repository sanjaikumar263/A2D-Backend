import mongoose from 'mongoose'

const secuserSchema = new mongoose.Schema({
  categories: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  whatsappNumber: {
    type: Number,
  },
  occupation: {
    type: String,
  },
  motherborder: {
    type: String,
  },
  processer: {
    type: String,
  }
});

const SecUser = mongoose.model('SecUser', secuserSchema);

export default SecUser;
