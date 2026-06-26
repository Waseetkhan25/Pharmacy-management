const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,       
    trim: true            
  },

  category: {
    type: String,
    required: true,
    enum: ['Tablet', 'Syrup', 'Injection', 'Capsule', 'Cream']
  },

  quantity: {
    type: Number,
    required: true,
    default: 0
  },

  price: {
    type: Number,
    required: true
  },

  expiryDate: {
    type: Date,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Medicine', medicineSchema);