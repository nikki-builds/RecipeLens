require('dotenv').config();
const mongoose = require('mongoose');
const { parseIngredients } = require('./services/openaiService');
const { calculateRecipeNutrition } = require('./services/nutritionService');

const testRecipe = `
2 cups all-purpose flour
1 tablespoon olive oil
3 large eggs
`;

async function runTest() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');
    
    // Step 1: Parse with AI
    console.log('🤖 Parsing ingredients with AI...');
    const parsed = await parseIngredients(testRecipe);
    console.log('Parsed:', JSON.stringify(parsed, null, 2));  // ← 여기 자세히 보기!
    console.log('\n---\n');
    
    // Step 2: Calculate nutrition
    console.log('🧮 Calculating nutrition...');
    const nutrition = await calculateRecipeNutrition(parsed);
    console.log('Results:', JSON.stringify(nutrition, null, 2));
    
    await mongoose.connection.close();
    console.log('\n✅ Test complete!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

runTest();