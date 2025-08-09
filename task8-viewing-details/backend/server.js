const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Models
const Buyer = require('./models/Buyer');
const Product = require('./models/Product');
const Transaction = require('./models/Transaction');

// Routes
const buyersRouter = require('./routes/buyers');
const productsRouter = require('./routes/products');
const transactionsRouter = require('./routes/transactions');

app.use('/api/buyers', buyersRouter);
app.use('/api/products', productsRouter);
app.use('/api/transactions', transactionsRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/task8db';

mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> {
    console.log('MongoDB connected');
    app.listen(PORT, ()=> console.log('Server running on port', PORT));
  })
  .catch(err=> {
    console.error('Mongo connection error:', err.message);
    app.listen(PORT, ()=> console.log('Server running (no DB) on port', PORT));
  });
