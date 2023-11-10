const { Schema, model } = require('mongoose');
const Bid = require("./Bid");
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema({
  // productId: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  size: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  bids: [
    {
      type: Schema.Types.ObjectId,
      ref: "Bid",
    },
  ],
});

const Product = model('Product', productSchema);

module.exports = Product;
