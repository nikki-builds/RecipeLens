const express = require('express');
const router = express.Router();
const {
  analyzeRecipe,
  getRecipe,
  getAllRecipes
} = require('../controllers/recipeController');

router.post('/analyze', analyzeRecipe);

router.get('/', getAllRecipes);

router.get('/:id', getRecipe);

module.exports = router;
