const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, 'Model is required'],
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: [1900, 'Year must be after 1900'],
    max: [new Date().getFullYear(), 'Year must be current or in the past']
  },
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer',
    required: [true, 'Manufacturer is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
