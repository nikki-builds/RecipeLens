const express = require('express');
const router = express.Router();
const {
  analyzeRecipe,
  saveRecipe,
  getRecipe,
  getAllRecipes
} = require('../controllers/recipeController');

router.post('/analyze', analyzeRecipe);

router.post('/save', saveRecipe);

router.get('/', getAllRecipes);

router.get('/:id', getRecipe);

module.exports = router;


