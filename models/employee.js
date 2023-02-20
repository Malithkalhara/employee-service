var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
  },
  gender: String,
  phone: String,
  photo: String
});

var employee = new mongoose.model('Employee', schema);

module.exports = employee;