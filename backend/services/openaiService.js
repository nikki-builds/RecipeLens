const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * parses recipes ingredients using GPT-4o-mini
 * @param {string} recipeText - raw recipe text from user
 * @returns {Promise<Array} - parsed ingredients array
 */

async function parseIngredients(recipeText) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a recipe ingredient parser. Extract ingredients from recipe text and return ONLY a JSON array. Each ingredient should have:
          - quantity (number)
          - unit (e.g., "cup", "tablespoon", "teaspoon", "gram", "clove", "piece", "pinch", "dash")
          - ingredient (food name, lowercase, simplified)
          
          CRITICAL RULES:
          - For garlic: ALWAYS use unit "clove" (never "whole"). Example: "2 cloves garlic" → {"quantity": 2, "unit": "clove", "ingredient": "garlic"}
          - For chicken breast/thighs: use unit "piece" (never "whole")
          - For "to taste": use unit "pinch" with quantity 1
          - Separate unit from ingredient name (WRONG: "clove garlic", CORRECT: unit="clove", ingredient="garlic")
          - Remove preparation terms from ingredient (e.g., "minced", "diced", "sliced", "chopped")
          - Use standard units: cup, tablespoon, teaspoon, gram, ounce, piece, clove, pinch, dash
          - Convert fractions to decimals (1/2 → 0.5, 1/4 → 0.25)
          - Keep ingredient names simple and lowercase
          - If no unit specified, use "piece" for countable items, "gram" otherwise

          - For liquid seasonings/extracts:
          * "a few drops" → {"quantity": 0.5, "unit": "teaspoon", "ingredient": "..."}
          * "a splash" → {"quantity": 0.5, "unit": "tablespoon", "ingredient": "..."}
          * "a squeeze of lemon" → {"quantity": 1, "unit": "tablespoon", "ingredient": "lemon juice"}
          * "juice of 1 lemon" → {"quantity": 2, "unit": "tablespoon", "ingredient": "lemon juice"}
          
          Example Inputs:
          "2 cloves garlic, minced" → {"quantity": 2, "unit": "clove", "ingredient": "garlic"}
          "1 chicken breast" → {"quantity": 1, "unit": "piece", "ingredient": "chicken breast"}
          "Salt to taste" → {"quantity": 1, "unit": "pinch", "ingredient": "salt"}
          "1/2 cup chopped onion" → {"quantity": 0.5, "unit": "cup", "ingredient": "onion"}
          - Return ONLY the JSON array, not other text`
        },
        {
          role: "user",
          content: recipeText
        }
      ],
      temperature: 0.3, // lower = more consistent parsing, less creative more accurate
      max_tokens: 500
    });

    // Extract the JSON from GPT's response
    const content = response.choices[0].message.content.trim();
    const ingredients = JSON.parse(content);

    return ingredients;

  } catch (error) {
    console.error('OpenAi parsing error:', error);
    throw new Error('Failed to parse ingredients with AI');
  }
}

module.exports = {parseIngredients};