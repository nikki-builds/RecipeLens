const express = require('express');
const router = express.Router();
const {
  analyzeRecipe,
  saveRecipe,
  getRecipe,
  getAllRecipes,
  deleteRecipe
} = require('../controllers/recipeController');

router.post('/analyze', analyzeRecipe);

router.post('/save', saveRecipe);

router.get('/', getAllRecipes);

router.get('/:id', getRecipe);

router.delete('/:id', deleteRecipe);

module.exports = router;


