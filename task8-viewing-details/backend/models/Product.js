const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {type: String, required: true},
  category: String,
  price: {type: Number, default: 0},
  stock: {type: Number, default: 0},
  description: String,
  supplier: String,
  images: [String]
});

module.exports = mongoose.model('Product', ProductSchema);
