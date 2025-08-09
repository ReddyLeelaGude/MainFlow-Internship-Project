const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  buyer: {type: Schema.Types.ObjectId, ref: 'Buyer', required: true},
  product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
  quantity: {type: Number, default: 1},
  totalAmount: Number,
  paymentMethod: String,
  status: {type: String, enum: ['Completed','Pending','Canceled'], default:'Completed'},
  date: {type: Date, default: Date.now},
  notes: String
});

module.exports = mongoose.model('Transaction', TransactionSchema);
