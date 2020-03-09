const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrailerSchema = mongoose.Schema({
  size: {
    type: Number,
    required: [true, 'Size is required'],
  },
  manufacturer: {
    type: String,
    required: [true, 'Manufacturer is required'],
  },
  cost: {
    type: Number,
    required: [true, 'Build cost is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  leftTire: {
    type: String,
    required: [true, 'Left tire is required'],
  },
  rightTire: {
    type: String,
    required: [true, 'Right tire is required'],
  },
  tongue: {
    type: String,
    required: [true, 'Tongue is required'],
  },
  chains: {
    type: String,
    required: [true, 'Chains are required'],
  },
  fenders: {
    type: String,
    required: [true, 'Fenders is required'],
  },
  jack: {
    type: String,
    required: [true, 'Jack is required'],
  },
  sign: {
    type: String,
    required: [true, 'Sign is required'],
  },
  repairs: {
    type: String,
    // required: [true, 'Repairs are required'],
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Trailer = mongoose.model('Trailer', TrailerSchema);

module.exports = Trailer;