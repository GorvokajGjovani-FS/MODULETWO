const mongoose = require('mongoose');

const manufacturerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
      trim: true
    },
    founded: {
      type: Date,
      required: [true, 'Founded date is required'],
      max: [new Date(), 'Founded date cannot be in the future']
    },
    headquarters: String,
    ceo: String
  });

manufacturerSchema.virtual('cars', {
  ref: 'Car',
  localField: '_id',
  foreignField: 'manufacturer'
});

module.exports = mongoose.model('Manufacturer', manufacturerSchema);
