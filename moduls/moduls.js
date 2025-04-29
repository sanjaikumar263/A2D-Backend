import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  categories: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  age: {
    type: Number,
  },
  whatsappNumber: {
    type: Number,
  },
  location: {
    type: String,
  },
  purpose: {
    type: String,
  },
  occupation: {
    type: String,
  },
  investment: {
    type: String,
  },
});

const User =  mongoose.model('formdata', userSchema);

export default User;
