const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const Buyer = require('../models/Buyer');
const Product = require('../models/Product');
const { Parser } = require('json2csv');

// List with search & date range
router.get('/', async (req, res) => {
  const {q, from, to} = req.query;
  const filter = {};
  if(q) filter.$or = [{},{}]; // placeholder (client should use product/buyer name filters)
  if(from || to) filter.date = {};
  if(from) filter.date.$gte = new Date(from);
  if(to) filter.date.$lte = new Date(to);
  const results = await Transaction.find(filter).populate('buyer').populate('product').exec();
  res.json(results);
});

// Export CSV
router.get('/export/csv', async (req,res) => {
  const results = await Transaction.find().populate('buyer').populate('product').exec();
  const rows = results.map(t => ({
    transactionId: t._id,
    buyerName: t.buyer?.name || '',
    productName: t.product?.name || '',
    date: t.date,
    quantity: t.quantity,
    totalAmount: t.totalAmount,
    paymentMethod: t.paymentMethod,
    status: t.status
  }));
  const parser = new Parser();
  const csv = parser.parse(rows);
  res.header('Content-Type','text/csv');
  res.attachment('transactions.csv');
  res.send(csv);
});

router.post('/', async (req,res) => {
  const {buyer, product, quantity} = req.body;
  const b = await Buyer.findById(buyer);
  const p = await Product.findById(product);
  if(!b || !p) return res.status(400).json({message:'Invalid buyer or product'});
  const total = (p.price || 0) * (quantity || 1);
  const tr = new Transaction({...req.body, totalAmount: total});
  await tr.save();
  res.json(tr);
});

router.get('/:id', async (req,res) => {
  const t = await Transaction.findById(req.params.id).populate('buyer').populate('product').exec();
  if(!t) return res.status(404).json({message:'Not found'});
  res.json(t);
});

module.exports = router;
