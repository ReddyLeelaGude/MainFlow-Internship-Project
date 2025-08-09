const express = require('express');
const router = express.Router();
const Buyer = require('../models/Buyer');

// List with search & filters
router.get('/', async (req, res) => {
  const {q, sortBy, location} = req.query;
  const filter = {};
  if(q) filter.$or = [{name: new RegExp(q,'i')},{email:new RegExp(q,'i')},{phone:new RegExp(q,'i')}];
  if(location) filter.address = new RegExp(location,'i');
  let query = Buyer.find(filter);
  if(sortBy === 'name') query = query.sort({name:1});
  if(sortBy === 'date') query = query.sort({registrationDate:-1});
  const results = await query.exec();
  res.json(results);
});

router.post('/', async (req, res) => {
  const b = new Buyer(req.body);
  await b.save();
  res.json(b);
});

router.get('/:id', async (req,res) => {
  const b = await Buyer.findById(req.params.id);
  if(!b) return res.status(404).json({message:'Not found'});
  res.json(b);
});

module.exports = router;
