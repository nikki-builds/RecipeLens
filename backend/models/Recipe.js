const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    requred: true
  },
  unit: {
    type: String,
    required: true
  },
  matched: {
    type: Boolean,
    default: true
  },
  nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    fiber: Number,
    sugar: Number,
    sodium: Number,
    cholesterol: Number,
    saturatedFat: Number,
    transFat: Number,
  }
});

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  originalText: {
    type: String,
    required: true
  },
  ingredients: [ingredientSchema],
  servings: {
    type: Number,
    default: 1,
    min: 1
  },
  totalNutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    fiber: Number,
    sugar: Number,
    sodium: Number,
    cholesterol: Number,
    saturatedFat: Number,
    transFat: Number,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);