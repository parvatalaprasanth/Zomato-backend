const mongoose = require('mongoose');

const foodSchema = {
  email: String,
  name: String,
  price: String,
  type: String,
  imageURL: String,
  rating: String,
};
module.exports = mongoose.model('Food', foodSchema);
