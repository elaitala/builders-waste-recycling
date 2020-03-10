const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = mongoose.Schema({
  jobName: {
    type: String,
    required: [true, 'Job name is required'],
  },
  client: {
    type: String,
    required: [true, 'Manufacturer is required'],
  },
  location: {
    type: String,
    required: [true, 'Location cost is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  long: {
    type: Number,
    // required: [true, 'Left tire is required'],
  },
  lat: {
    type: Number,
    // required: [true, 'Right tire is required'],
  },
  type: {
    type: String,
    required: [true, 'Type of job is required'],
  },
  siteContact: {
    type: String,
    required: [true, 'Site contact is required'],
  },
  trailer: {
    type: Schema.Types.ObjectId,
    ref: 'Trailer'
  },
  droppedDate: {
    type: Date,
    required: [true, 'Dropped date is required'],
  },
  droppedBy: {
    type: String,
    required: [true, 'Dropped by is required'],
  },
  pickedDate: {
    type: Date,
    required: [true, 'Picked date is required'],
  },
  pickedBy: {
    type: String,
    required: [true, 'Picked by is required'],
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  paid: {
    type: Boolean,
    required: [true, 'Paid status is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;