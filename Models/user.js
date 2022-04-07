const mongoose = require('mongoose');

const userSchema = {
  email: String,
  password: String,
  address: String,
  longitude: String,
  latitude: String,
};


module.exports = mongoose.model('User', userSchema);
