/**
 * Seed script to add sample buyers, products and transactions.
 * Run: node seed.js (ensure MONGO_URI is set or default localhost)
 */
const mongoose = require('mongoose');
require('dotenv').config();
const Buyer = require('./models/Buyer');
const Product = require('./models/Product');
const Transaction = require('./models/Transaction');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/task8db';

async function seed(){
  await mongoose.connect(MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true});
  await Buyer.deleteMany({});
  await Product.deleteMany({});
  await Transaction.deleteMany({});

  const buyers = await Buyer.create([
    {name:'Alice Kumar', email:'alice@example.com', phone:'9999000011', address:'Hyderabad'},
    {name:'Ravi Sharma', email:'ravi@example.com', phone:'8888000022', address:'Mumbai'}
  ]);
  const products = await Product.create([
    {name:'Wireless Mouse', category:'Electronics', price:799, stock:50, description:'Ergonomic mouse'},
    {name:'Notebook', category:'Stationery', price:49, stock:200, description:'A5 notebook'}
  ]);
  await Transaction.create([
    {buyer:buyers[0]._id, product:products[0]._id, quantity:1, totalAmount:products[0].price, paymentMethod:'UPI', status:'Completed'},
    {buyer:buyers[1]._id, product:products[1]._id, quantity:5, totalAmount:products[1].price*5, paymentMethod:'Cash', status:'Completed'}
  ]);
  console.log('Seeded DB');
  process.exit(0);
}

seed().catch(e=>{console.error(e); process.exit(1);});
