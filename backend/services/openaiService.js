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
          - quantitiy (number)
          - unit (e.g, "cup", "tablespoon", "gram", "whole")
          - ingredient (food name, lowercase)
          
          Example Output:
          [
            {"quantity":2, "unit": "cup", "ingredient": "flour"},
            {"quantity":1, "unit": "tablespoon", "ingredient": "olive oil"},
          ]
          
          Rules:
          - Use standard units (cup, tablespoon, teaspoon, gram, ounce, whole)
          - Convert fractions to decimals (1/2 to 0.5)
          - Keep ingredient names simple and lowercase
          - If no unit is specified, use "whole"
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