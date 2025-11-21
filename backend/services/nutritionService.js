const Food = require('../models/Food');

/**
 * Unit conversion to grams
 * There are appx conversions for common ingredients
 */

const UNIT_CONVERSIONS = {
  // volume to grams
  cup: 240,
  tablespoon: 15,
  teaspoon: 5,

  //weight units
  gram: 1,
  g: 1,
  ounce: 28.35,
  oz: 28.35,
  pound: 453.59,
  lb: 453.59,

  // whole items (default to 100g)
  whole: 100,
  piece: 100
};

/**
 * Finds matching food in database
 * @param {string} ingredientName - name from parsed ingredient
 * @return {Promise<Object|Null>} - Food document or null
 */

async function findMatchingFood(ingredientName) {
  try {
    // try exact match first (case-insensitive)
    let food = await Food.findOne({
      name: new RegExp(`^${ingredientName}$`, 'i')
    });

    // if no exact match, try partial match
    if (!food) {
      food = await Food.findOne({
        name: new RegExp(ingredientName, 'i')
      });
    }

    return food;
  } catch (error) {
    console.error(`Error finding food for "${ingredientName}":`, error);
    return null;
  }
}

/**
 * Converts ingredient quantity to grams
 * @param {number} quantity - amount from parsed ingredient
 * @param {string} unit - unit from parsed ingredient
 * @return {number} - Grams
 */

// actual weight for each ingredient(1 whole, 1 slice)
const FOOD_ITEM_WEIGHTS = {
  'egg': 50,
  'eggs': 50,
  'whole egg': 50,
  'banana': 118,
  'bananas': 118,
  'apple': 182,
  'apples': 182,
  'bread': 30,
  'slice of bread': 30,
  'cheddar cheese': 28,
  'slice of cheese': 28,
  'cheddar': 28,
  'cheese': 28,
  // add as needed
};

function convertToGrams(quantity, unit, ingredientName) {
  const unitLower = unit.toLowerCase();

  if(unitLower === "whole" || unitLower === "piece" || unitLower === "slice") {
    const foodName = ingredientName.toLowerCase();
    const itemWeight = FOOD_ITEM_WEIGHTS[foodName] || 100; 
    return quantity * itemWeight; 
  }

  const conversionFactor = UNIT_CONVERSIONS[unitLower] || 100;
  return quantity * conversionFactor;
}

/**
 * Calculates nutrition for a single ingredient
 * @param {Object} ingredient - parsed ingredient object
 * @param {Object} foodData - food from database
 * @return {Object} - calculated nutrition
 */

function calculateIngredientNutrition(ingredient, foodData) {
  const grams = convertToGrams(
    ingredient.quantity, 
    ingredient.unit,
    ingredient.ingredient);
  
  // Food data is per 100g. so scale it 
  const scaleFactor = grams / 100;

  return {
    foodId: foodData._Id,
    name: ingredient.ingredient,
    amount: ingredient.quantity,
    unit: ingredient.unit,
    grams: Math.round(grams),
    matched: true,
    nutrition: {
      calories: Math.round(foodData.nutrition.calories * scaleFactor),
      protein: Math.round(foodData.nutrition.protein * scaleFactor * 10)/10,
      carbs: Math.round(foodData.nutrition.carbs * scaleFactor * 10)/10,
      fat: Math.round(foodData.nutrition.fat * scaleFactor * 10)/10
    }
  };
}

/**
 * Main function: calculate nutrition for entire recipe
 * @param {Array} parsedIngredients - array from OpenAI parsing
 * @return {Promise<Object>} - complete nutrition breakdown
 */
async function calculateRecipeNutrition(parsedIngredients) {
  const results = [];
  let matchedCount = 0;

  const totals = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  };

  // process each ingredient
  for(const ingredient of parsedIngredients) {
    const foodData = await findMatchingFood(ingredient.ingredient);

    // // debugging log
    // console.log(`\n--- Ingredient: ${ingredient.ingredient} ---`);
    // console.log('foodData:', foodData);

    if (foodData) {
      matchedCount++;
      // calculate nutrition for this ingredient
      const ingredientResult = calculateIngredientNutrition(ingredient, foodData);

      // // checking results
      // console.log('ingredientResult:', ingredientResult);

      results.push(ingredientResult);

      // Add to totals
      totals.calories += ingredientResult.nutrition.calories;
      totals.protein += ingredientResult.nutrition.protein;
      totals.carbs += ingredientResult.nutrition.carbs;
      totals.fat += ingredientResult.nutrition.fat;

    } else {
      // ingredient not found in database
      results.push({
        name: ingredient.ingredient,
        amount: ingredient.quantity,
        unit: ingredient.unit,
        matched: false,
        error: 'Not found in database'
      });
    }
  }

  // check right after looping
  if (matchedCount === 0) {
    throw new Error('NUTRITION_ERROR: No ingredients found in database');
  }

  // matchedCount > 0, Round totals
  totals.protein = Math.round(totals.protein * 10)/ 10;
  totals.carbs = Math.round(totals.carbs * 10)/ 10;
  totals.fat = Math.round(totals.fat * 10)/ 10;

  return {
    ingredients: results,
    totals: totals,
    matchedCount,
    totalCount: results.length
  };

}

module.exports = {
  calculateRecipeNutrition,
  findMatchingFood,
  convertToGrams
};