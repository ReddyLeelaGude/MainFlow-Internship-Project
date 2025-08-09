const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyerSchema = new Schema({
  name: {type: String, required: true},
  email: String,
  phone: String,
  address: String,
  registrationDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Buyer', BuyerSchema);
