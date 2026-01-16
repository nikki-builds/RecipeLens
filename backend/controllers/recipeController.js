const openaiService = require("../services/openaiService");
const nutritionService = require("../services/nutritionService");
const Recipe = require("../models/Recipe");

// Analyze recipe and calculate nutrition (NO SAVING)
// route POST /api/recipes/analyze

const analyzeRecipe = async (req,res) => {
  try {
    const { recipeText, recipeName, servings } = req.body;

    // validation
    if(!recipeText || recipeText.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Recipe text is required'
      });
    }

    // step1: parse ingredients using OpenAI
    console.log('Parsing ingredients with OpenAI...');
    const parsedIngredients = await openaiService.parseIngredients(recipeText);

    if(!parsedIngredients || parsedIngredients.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'No ingredients could be parsed from the recipe'
      });
    }

    // step: 2 calculate nutrition
    console.log('Calculating nutrition...');
    const nutritionData = await nutritionService.calculateRecipeNutrition(parsedIngredients);

    // step: 3 Save to database. --> changed to NO SAVING
    // user will click "SAVE" button to save

    // const recipe = await Recipe.create({
    //   name: recipeName || 'Untitled Recipe',
    //   originalText: recipeText,
    //   ingredients: nutritionData.ingredients,
    //   servings: servings || 1,
    //   totalNutrition: nutritionData.totals,
    // });

    // step: 4 send response (without saving)
    res.status(200).json({
      success:true,
      data: {
        // recipeId: recipe._id, (removed b/c not saved yet)
        name: recipeName || 'Untitled Recipe',
        originalText: recipeText,
        ingredients: nutritionData.ingredients,
        totalNutrition: nutritionData.totals,
        servings: servings || 1,
        matchedCount: nutritionData.matchedCount,
        totalCount: nutritionData.totalCount,
      }
    });
  } catch (error) {
    console.log('Error in analyzeRecipe:', error);

    // nutritionService.js에서 던진 에러 잡기
    if(error.message.includes('NUTRITION_ERROR')) {
      return res.status(422).json({
        success: false,
        error: 'None of the ingredients were found in our database'
      });
    }

    // Handle OpenAI errors
    if(error.message.includes('OpenAI') || error.message.includes('AI')) {
      return res.status(503).json({
        success: false,
        error: 'AI service temporarily unavailable. Please try again'
      });
    }

    // Generic error response
    res.status(500).json ({
      success: false,
      error: 'Failed to analyze recipe. Please try again.'
    });    
  }
};


// Save analyzed recipe to database
// route: POST/api/recipes/save
const saveRecipe = async (req,res) => {
  try {
    const { name, originalText, ingredients, totalNutrition, servings} = req.body;

    // validation
    if(!ingredients || !totalNutrition) {
      return res.status(400).json({
        success: false,
        error: 'Recipe data is required'
      });
    }
    // check if matchedCount is 0
    const matchedCount = ingredients.filter(i => i.matched).length;
    if(matchedCount === 0) {
      return res.status(400).json({
        success: false,
        error: 'Cannot save recipe with no matched ingredients'
      });
    }

    // save to database
    const recipe = await Recipe.create({
      name: name || 'Untitled Recipe',
      originalText: originalText || '',
      ingredients: ingredients,
      servings: servings || 1,
      totalNutrition: totalNutrition,
    });

    // send response
    res.status(201).json({
      success: true,
      data: {
        recipeId: recipe._id,
        message: 'Recipe saved successfully!'
      }
    });
  } catch (error) {
    console.log('Error in saveRecipe:', error);
    res.status(500).json({
      success:false,
      error: 'Failed to save recipe'
    });
  }
};

// Get recipe by ID
// route: GET /api/recipes/:id
const getRecipe = async (req,res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if(!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found'
      });
    }
    res.status(200).json({
      success: true,
      data: recipe
    });

  } catch (error) {
    console.error('Error in getRecipe:', error);
    // handle invalid MongoDB ObjectId
    if(error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found'
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve recipe'
    });    
  }
};


// Get all recipes (for history)
// route: GET /api/recipes
const getAllRecipes = async (req,res) => {
  try {
    const recipes = await Recipe.find()
    .sort({ createdAt: -1 })
    .limit(20);

    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes
    });

  } catch (error) {
    console.error('Error in getAllRecipes', error);
    res.status(500).json({
      success: false, 
      error: 'Failed to retrieve recipes'
    });  
  }
};


module.exports = {
  analyzeRecipe,
  getRecipe,
  saveRecipe,
  getAllRecipes
};