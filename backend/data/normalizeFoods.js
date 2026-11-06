const foods = require('./seedFood');

console.log('🔄 Starting food data normalization...\n');

const normalizedFoods = foods.map(food => {
  // Calculate conversion factor to normalize to 100g/100ml
  const factor = 100 / food.servingSize;
  
  console.log(`Processing: ${food.name}`);
  console.log(`  Original: ${food.servingSize}${food.servingUnit} → 100${food.servingUnit}`);
  console.log(`  Factor: ${factor.toFixed(2)}x\n`);
  
  return {
    name: food.name,
    commonNames: food.commonNames,
    category: food.category,
    servingSize: 100,
    servingUnit: food.servingUnit,
    nutrition: {
      calories: Math.round(food.nutrition.calories * factor),
      protein: Math.round(food.nutrition.protein * factor * 10) / 10,
      carbs: Math.round(food.nutrition.carbs * factor * 10) / 10,
      fat: Math.round(food.nutrition.fat * factor * 10) / 10,
      fiber: Math.round(food.nutrition.fiber * factor * 10) / 10,
      sugar: Math.round(food.nutrition.sugar * factor * 10) / 10,
      sodium: Math.round(food.nutrition.sodium * factor),
      cholesterol: Math.round(food.nutrition.cholesterol * factor),
      saturatedFat: Math.round(food.nutrition.saturatedFat * factor * 10) / 10,
      transFat: Math.round(food.nutrition.transFat * factor * 10) / 10
    }
  };
});

console.log('✅ Normalization complete!\n');
console.log('Summary:');
console.log(`Total foods: ${normalizedFoods.length}`);
console.log(`All normalized to: 100g or 100ml\n`);

// Output formatted JavaScript
console.log('Copy this to seedFood.js:\n');
console.log('const foods = ' + JSON.stringify(normalizedFoods, null, 2) + ';\n');