const { Schema, model } = require('mongoose');
const productSchema = require('./Product')
const dateFormat = require('../utils/dateFormat');
const userSchema = require("./User");
const Product = require('./Product');

const bidSchema = new Schema({

  amount: {
    type: Number,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Bid = model('Bid', bidSchema);

module.exports = Bid;
