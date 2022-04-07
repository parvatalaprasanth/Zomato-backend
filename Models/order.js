const mongoose = require('mongoose');

const orderSchema = {
  useremail: String,
  useraddress: String,
  hotelemail: String,
  hotelname: String,
  time: String,
  obj: Object,
};

module.exports = mongoose.model('Order', orderSchema);
