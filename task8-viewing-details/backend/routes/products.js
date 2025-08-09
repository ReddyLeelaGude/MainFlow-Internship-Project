const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// List with filters
router.get('/', async (req, res) => {
  const {q, category, inStock, sortBy} = req.query;
  const filter = {};
  if(q) filter.name = new RegExp(q,'i');
  if(category) filter.category = category;
  if(inStock === 'true') filter.stock = {$gt:0};
  let query = Product.find(filter);
  if(sortBy === 'price') query = query.sort({price:1});
  const results = await query.exec();
  res.json(results);
});

router.post('/', async (req, res) => {
  const p = new Product(req.body);
  await p.save();
  res.json(p);
});

router.get('/:id', async (req,res) => {
  const p = await Product.findById(req.params.id);
  if(!p) return res.status(404).json({message:'Not found'});
  res.json(p);
});

module.exports = router;
