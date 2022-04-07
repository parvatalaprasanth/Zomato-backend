const mongoose = require('mongoose');

const hotelSchema = {
  email: String,
  password: String,
  type: String,
  name: String,
  longitude: String,
  latitude: String,
  imageURL: String,
  rating: String,
};

module.exports = mongoose.model('Hotel', hotelSchema);
