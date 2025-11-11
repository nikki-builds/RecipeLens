const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  commonNames: [String],
  cateogry: {
    type: String,
    enum:['protein', 'grain', 'vegetable', 'fruit', 'dairy', 'fat', 'sweetener', 'spice', 'other'],
    default: 'other'
  },
  servingSize: {
    type: Number,
    required: true, // in grams
  },
  servingUnit: {
    type: String,
    default: 'g'
  },
  nutrition: {
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fat: { type: Number, required: true },
    fiber: { type: Number, default: 0 },
    sugar: { type: Number, default: 0 },
    sodium: { type: Number, default: 0 },
    cholesterol: { type: Number, default: 0 },
    saturatedFat: { type: Number, default: 0 },
    transFat: { type: Number, default: 0 },
    }
}, {
  timestamps: true
});

// Index for faster searches by words or phrases
foodSchema.index({ name:'text', commonNames: 'text'});

module.exports = mongoose.model('Food', foodSchema);