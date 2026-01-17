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

// ADD: Ingredient-specific cup conversions (in grams)
const CUP_TO_GRAMS = {
  // Grains
  'oats': 80,
  'oatmeal': 80,
  'rolled oats': 80,
  'rice': 185,
  'white rice': 185,
  'brown rice': 185,
  'cooked rice': 158,
  'pasta': 100,
  'spaghetti': 100,
  'noodles': 100,
  'flour': 120,
  'all-purpose flour': 120,
  'white flour': 120,
  'quinoa': 170,
  'couscous': 173,
  
  // Vegetables (chopped)
  'spinach': 30,
  'lettuce': 36,
  'kale': 67,
  'broccoli': 71,
  'cauliflower': 100,
  'carrot': 128,
  'onion': 160,
  'tomato': 149,
  'cucumber': 104,
  'bell pepper': 149,
  'mushroom': 70,
  
  // Fruits
  'blueberry': 148,
  'blueberries': 148,
  'strawberry': 144,
  'strawberries': 144,
  'grape': 151,
  'grapes': 151,
  
  // Proteins
  'lentils': 192,
  'chickpeas': 164,
  'black beans': 172,
  
  // Dairy
  'milk': 244,
  'yogurt': 245,
  'cheese': 113,
  'cheddar cheese': 113,
  
  // Other
  'sugar': 200,
  'honey': 340,
  'peanut butter': 258,
  'butter': 227
};


/**
 * Finds matching food in database
 * @param {string} ingredientName - name from parsed ingredient
 * @return {Promise<Object|Null>} - Food document or null
 */

async function findMatchingFood(ingredientName) {
  try {
    // MongoDB text search ( smart word matching - refer to Food.js line 40)
    let food = await Food.findOne({
      $text: { $search: ingredientName}
    });

    // Fallback: regex search
    if(!food) {
      food = await Food.findOne({
        $or: [
          {name: new RegExp(ingredientName, 'i')},
          {commonNames: new RegExp(ingredientName, 'i')}
        ]
      });
    }

    return food; //  MongoDB에서 찾은 food 문서 반환
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
  const ingredientLower = ingredientName.toLowerCase();

  if(unitLower === "whole" || unitLower === "piece" || unitLower === "slice") {
    const foodName = ingredientName.toLowerCase();
    const itemWeight = FOOD_ITEM_WEIGHTS[ingredientLower] || 100; 
    return quantity * itemWeight; 
  }

  // ADD: cup measurements with ingredient-spectific weights
  if(unitLower === "cup" || unitLower === 'cups') {
    // check if there's specific cup conversion for this ingredient 
    const cupWeight = CUP_TO_GRAMS[ingredientLower];
    if(cupWeight) {
      return quantity * cupWeight;
    }
    return quantity * 240;
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