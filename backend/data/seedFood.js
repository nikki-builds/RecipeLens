const foods = [
  // Proteins
  {
    name: "Chicken Breast",
    commonNames: ["chicken breast", "boneless chicken", "chicken"],
    category: "protein",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      sugar: 0,
      sodium: 74,
      cholesterol: 85,
      saturatedFat: 1,
      transFat: 0
    }
  },
  {
    name: "Ground Beef",
    commonNames: ["ground beef", "beef", "minced beef"],
    category: "protein",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 250,
      protein: 26,
      carbs: 0,
      fat: 15,
      fiber: 0,
      sugar: 0,
      sodium: 75,
      cholesterol: 80,
      saturatedFat: 6,
      transFat: 0.5
    }
  },
  {
    name: "Egg",
    commonNames: ["egg", "eggs", "whole egg"],
    category: "protein",
    servingSize: 50,
    servingUnit: "g",
    nutrition: {
      calories: 72,
      protein: 6,
      carbs: 0.4,
      fat: 5,
      fiber: 0,
      sugar: 0.2,
      sodium: 71,
      cholesterol: 186,
      saturatedFat: 1.6,
      transFat: 0
    }
  },
  {
    name: "Salmon",
    commonNames: ["salmon", "salmon fillet"],
    category: "protein",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
      fiber: 0,
      sugar: 0,
      sodium: 59,
      cholesterol: 55,
      saturatedFat: 3.1,
      transFat: 0
    }
  },

  // Grains
  {
    name: "White Rice",
    commonNames: ["white rice", "rice", "cooked rice"],
    category: "grain",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
      fiber: 0.4,
      sugar: 0.1,
      sodium: 1,
      cholesterol: 0,
      saturatedFat: 0.1,
      transFat: 0
    }
  },
  {
    name: "Brown Rice",
    commonNames: ["brown rice", "whole grain rice"],
    category: "grain",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 112,
      protein: 2.6,
      carbs: 24,
      fat: 0.9,
      fiber: 1.8,
      sugar: 0.4,
      sodium: 5,
      cholesterol: 0,
      saturatedFat: 0.2,
      transFat: 0
    }
  },
  {
    name: "Pasta",
    commonNames: ["pasta", "spaghetti", "noodles"],
    category: "grain",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 131,
      protein: 5,
      carbs: 25,
      fat: 1.1,
      fiber: 1.8,
      sugar: 0.6,
      sodium: 1,
      cholesterol: 0,
      saturatedFat: 0.2,
      transFat: 0
    }
  },
  {
    name: "Bread",
    commonNames: ["bread", "white bread", "slice of bread"],
    category: "grain",
    servingSize: 30,
    servingUnit: "g",
    nutrition: {
      calories: 79,
      protein: 2.6,
      carbs: 15,
      fat: 1,
      fiber: 0.8,
      sugar: 1.5,
      sodium: 147,
      cholesterol: 0,
      saturatedFat: 0.2,
      transFat: 0
    }
  },
  {
    name: "Oats",
    commonNames: ["oats", "oatmeal", "rolled oats"],
    category: "grain",
    servingSize: 40,
    servingUnit: "g",
    nutrition: {
      calories: 150,
      protein: 5,
      carbs: 27,
      fat: 3,
      fiber: 4,
      sugar: 0.4,
      sodium: 0,
      cholesterol: 0,
      saturatedFat: 0.5,
      transFat: 0
    }
  },

  // Vegetables
  {
    name: "Broccoli",
    commonNames: ["broccoli", "broccoli florets"],
    category: "vegetable",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 34,
      protein: 2.8,
      carbs: 7,
      fat: 0.4,
      fiber: 2.6,
      sugar: 1.7,
      sodium: 33,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },
  {
    name: "Spinach",
    commonNames: ["spinach", "fresh spinach"],
    category: "vegetable",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      sugar: 0.4,
      sodium: 79,
      cholesterol: 0,
      saturatedFat: 0.1,
      transFat: 0
    }
  },
  {
    name: "Carrot",
    commonNames: ["carrot", "carrots"],
    category: "vegetable",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 41,
      protein: 0.9,
      carbs: 10,
      fat: 0.2,
      fiber: 2.8,
      sugar: 4.7,
      sodium: 69,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },
  {
    name: "Tomato",
    commonNames: ["tomato", "tomatoes"],
    category: "vegetable",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fat: 0.2,
      fiber: 1.2,
      sugar: 2.6,
      sodium: 5,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },
  {
    name: "Bell Pepper",
    commonNames: ["bell pepper", "pepper", "sweet pepper"],
    category: "vegetable",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 31,
      protein: 1,
      carbs: 6,
      fat: 0.3,
      fiber: 2.1,
      sugar: 4.2,
      sodium: 4,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },

  // Fruits
  {
    name: "Banana",
    commonNames: ["banana", "bananas"],
    category: "fruit",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 89,
      protein: 1.1,
      carbs: 23,
      fat: 0.3,
      fiber: 2.6,
      sugar: 12,
      sodium: 1,
      cholesterol: 0,
      saturatedFat: 0.1,
      transFat: 0
    }
  },
  {
    name: "Apple",
    commonNames: ["apple", "apples"],
    category: "fruit",
    servingSize: 182,
    servingUnit: "g",
    nutrition: {
      calories: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      fiber: 4.4,
      sugar: 19,
      sodium: 2,
      cholesterol: 0,
      saturatedFat: 0.1,
      transFat: 0
    }
  },
  {
    name: "Strawberry",
    commonNames: ["strawberry", "strawberries"],
    category: "fruit",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 32,
      protein: 0.7,
      carbs: 7.7,
      fat: 0.3,
      fiber: 2,
      sugar: 4.9,
      sodium: 1,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },
  {
    name: "Blueberry",
    commonNames: ["blueberry", "blueberries"],
    category: "fruit",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 57,
      protein: 0.7,
      carbs: 14,
      fat: 0.3,
      fiber: 2.4,
      sugar: 10,
      sodium: 1,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },

  // Dairy
  {
    name: "Milk",
    commonNames: ["milk", "whole milk", "cow milk"],
    category: "dairy",
    servingSize: 244,
    servingUnit: "ml",
    nutrition: {
      calories: 149,
      protein: 7.7,
      carbs: 12,
      fat: 8,
      fiber: 0,
      sugar: 12,
      sodium: 105,
      cholesterol: 24,
      saturatedFat: 4.6,
      transFat: 0.3
    }
  },
  {
    name: "Cheddar Cheese",
    commonNames: ["cheddar", "cheddar cheese", "cheese"],
    category: "dairy",
    servingSize: 28,
    servingUnit: "g",
    nutrition: {
      calories: 113,
      protein: 7,
      carbs: 0.4,
      fat: 9,
      fiber: 0,
      sugar: 0.1,
      sodium: 174,
      cholesterol: 27,
      saturatedFat: 5.3,
      transFat: 0.3
    }
  },
  {
    name: "Greek Yogurt",
    commonNames: ["greek yogurt", "yogurt"],
    category: "dairy",
    servingSize: 170,
    servingUnit: "g",
    nutrition: {
      calories: 100,
      protein: 17,
      carbs: 6,
      fat: 0.7,
      fiber: 0,
      sugar: 6,
      sodium: 60,
      cholesterol: 5,
      saturatedFat: 0.3,
      transFat: 0
    }
  },
  {
    name: "Butter",
    commonNames: ["butter", "salted butter"],
    category: "fat",
    servingSize: 14,
    servingUnit: "g",
    nutrition: {
      calories: 102,
      protein: 0.1,
      carbs: 0,
      fat: 12,
      fiber: 0,
      sugar: 0,
      sodium: 91,
      cholesterol: 31,
      saturatedFat: 7.3,
      transFat: 0.5
    }
  },

  // Fats & Oils
  {
    name: "Olive Oil",
    commonNames: ["olive oil", "extra virgin olive oil"],
    category: "fat",
    servingSize: 13,
    servingUnit: "ml",
    nutrition: {
      calories: 119,
      protein: 0,
      carbs: 0,
      fat: 14,
      fiber: 0,
      sugar: 0,
      sodium: 0,
      cholesterol: 0,
      saturatedFat: 2,
      transFat: 0
    }
  },
  {
    name: "Avocado",
    commonNames: ["avocado"],
    category: "fat",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 160,
      protein: 2,
      carbs: 8.5,
      fat: 15,
      fiber: 6.7,
      sugar: 0.7,
      sodium: 7,
      cholesterol: 0,
      saturatedFat: 2.1,
      transFat: 0
    }
  },
  {
    name: "Peanut Butter",
    commonNames: ["peanut butter"],
    category: "fat",
    servingSize: 32,
    servingUnit: "g",
    nutrition: {
      calories: 188,
      protein: 8,
      carbs: 7,
      fat: 16,
      fiber: 1.9,
      sugar: 3,
      sodium: 147,
      cholesterol: 0,
      saturatedFat: 3.3,
      transFat: 0
    }
  },

  // Sweeteners
  {
    name: "Sugar",
    commonNames: ["sugar", "white sugar", "granulated sugar"],
    category: "sweetener",
    servingSize: 4,
    servingUnit: "g",
    nutrition: {
      calories: 16,
      protein: 0,
      carbs: 4,
      fat: 0,
      fiber: 0,
      sugar: 4,
      sodium: 0,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },
  {
    name: "Honey",
    commonNames: ["honey"],
    category: "sweetener",
    servingSize: 21,
    servingUnit: "g",
    nutrition: {
      calories: 64,
      protein: 0.1,
      carbs: 17,
      fat: 0,
      fiber: 0,
      sugar: 17,
      sodium: 1,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },

  // Baking/Cooking
  {
    name: "All-Purpose Flour",
    commonNames: ["flour", "all purpose flour", "white flour"],
    category: "grain",
    servingSize: 125,
    servingUnit: "g",
    nutrition: {
      calories: 455,
      protein: 13,
      carbs: 95,
      fat: 1.2,
      fiber: 3.4,
      sugar: 0.3,
      sodium: 3,
      cholesterol: 0,
      saturatedFat: 0.2,
      transFat: 0
    }
  },
  {
    name: "Onion",
    commonNames: ["onion", "onions", "yellow onion"],
    category: "vegetable",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 40,
      protein: 1.1,
      carbs: 9,
      fat: 0.1,
      fiber: 1.7,
      sugar: 4.2,
      sodium: 4,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },
  {
    name: "Garlic",
    commonNames: ["garlic", "garlic cloves"],
    category: "vegetable",
    servingSize: 3,
    servingUnit: "g",
    nutrition: {
      calories: 4,
      protein: 0.2,
      carbs: 1,
      fat: 0,
      fiber: 0.1,
      sugar: 0,
      sodium: 1,
      cholesterol: 0,
      saturatedFat: 0,
      transFat: 0
    }
  },

  // Legumes
  {
    name: "Black Beans",
    commonNames: ["black beans", "beans"],
    category: "protein",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 132,
      protein: 8.9,
      carbs: 24,
      fat: 0.5,
      fiber: 8.7,
      sugar: 0.3,
      sodium: 2,
      cholesterol: 0,
      saturatedFat: 0.1,
      transFat: 0
    }
  },
  {
    name: "Lentils",
    commonNames: ["lentils", "cooked lentils"],
    category: "protein",
    servingSize: 100,
    servingUnit: "g",
    nutrition: {
      calories: 116,
      protein: 9,
      carbs: 20,
      fat: 0.4,
      fiber: 7.9,
      sugar: 1.8,
      sodium: 2,
      cholesterol: 0,
      saturatedFat: 0.1,
      transFat: 0
    }
  }
];

module.exports = foods;