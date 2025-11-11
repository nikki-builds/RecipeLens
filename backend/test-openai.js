require('dotenv').config();
const { parseIngredients } = require('./services/openaiService');

const testRecipe = `
2 cups all-purpose flour
1 tablespoon olive oil
3 large eggs
1/2 cup milk
`;

parseIngredients(testRecipe)
  .then(result => {
    console.log('Parsed ingredients:', JSON.stringify(result, null, 2));
  })
  .catch(error => {
    console.error('Test failed:', error.message);
  });