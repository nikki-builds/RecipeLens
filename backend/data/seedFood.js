const foods = [
  {
    "name": "Chicken Breast",
    "commonNames": [
      "chicken breast",
      "boneless chicken",
      "chicken"
    ],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 165,
      "protein": 31,
      "carbs": 0,
      "fat": 3.6,
      "fiber": 0,
      "sugar": 0,
      "sodium": 74,
      "cholesterol": 85,
      "saturatedFat": 1,
      "transFat": 0
    }
  },
  {
    "name": "Ground Beef",
    "commonNames": [
      "ground beef",
      "beef",
      "minced beef"
    ],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 250,
      "protein": 26,
      "carbs": 0,
      "fat": 15,
      "fiber": 0,
      "sugar": 0,
      "sodium": 75,
      "cholesterol": 80,
      "saturatedFat": 6,
      "transFat": 0.5
    }
  },
  {
    "name": "Egg",
    "commonNames": [
      "egg",
      "eggs",
      "whole egg",
      "boiled egg",
      "fried egg",
      "scrambled egg",
      "poached egg"
    ],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 144,
      "protein": 12,
      "carbs": 0.8,
      "fat": 10,
      "fiber": 0,
      "sugar": 0.4,
      "sodium": 142,
      "cholesterol": 372,
      "saturatedFat": 3.2,
      "transFat": 0
    }
  },
  {
    "name": "Salmon",
    "commonNames": [
      "salmon",
      "salmon fillet"
    ],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 208,
      "protein": 20,
      "carbs": 0,
      "fat": 13,
      "fiber": 0,
      "sugar": 0,
      "sodium": 59,
      "cholesterol": 55,
      "saturatedFat": 3.1,
      "transFat": 0
    }
  },
  {
    "name": "White Rice",
    "commonNames": [
      "white rice",
      "rice",
      "cooked rice"
    ],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 130,
      "protein": 2.7,
      "carbs": 28,
      "fat": 0.3,
      "fiber": 0.4,
      "sugar": 0.1,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Brown Rice",
    "commonNames": [
      "brown rice",
      "whole grain rice"
    ],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 112,
      "protein": 2.6,
      "carbs": 24,
      "fat": 0.9,
      "fiber": 1.8,
      "sugar": 0.4,
      "sodium": 5,
      "cholesterol": 0,
      "saturatedFat": 0.2,
      "transFat": 0
    }
  },
  {
    "name": "Pasta",
    "commonNames": [
      "pasta",
      "spaghetti",
      "noodles"
    ],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 131,
      "protein": 5,
      "carbs": 25,
      "fat": 1.1,
      "fiber": 1.8,
      "sugar": 0.6,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0.2,
      "transFat": 0
    }
  },
  {
    "name": "Bread",
    "commonNames": [
      'bread', 
      'white bread', 
      'whole wheat bread',
      'whole grain bread',
      'wheat bread',
      'multigrain bread',
      'sourdough bread',
      'rye bread',
      'toast',
      'slice of bread'
    ],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 263,
      "protein": 8.7,
      "carbs": 50,
      "fat": 3.3,
      "fiber": 2.7,
      "sugar": 5,
      "sodium": 490,
      "cholesterol": 0,
      "saturatedFat": 0.7,
      "transFat": 0
    }
  },
  {
    "name": "Oats",
    "commonNames": [
      "oats",
      "oatmeal",
      "rolled oats"
    ],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 375,
      "protein": 12.5,
      "carbs": 67.5,
      "fat": 7.5,
      "fiber": 10,
      "sugar": 1,
      "sodium": 0,
      "cholesterol": 0,
      "saturatedFat": 1.3,
      "transFat": 0
    }
  },
  {
    "name": "Broccoli",
    "commonNames": [
      "broccoli",
      "broccoli florets"
    ],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 34,
      "protein": 2.8,
      "carbs": 7,
      "fat": 0.4,
      "fiber": 2.6,
      "sugar": 1.7,
      "sodium": 33,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Spinach",
    "commonNames": [
      "spinach",
      "fresh spinach"
    ],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 23,
      "protein": 2.9,
      "carbs": 3.6,
      "fat": 0.4,
      "fiber": 2.2,
      "sugar": 0.4,
      "sodium": 79,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Carrot",
    "commonNames": [
      "carrot",
      "carrots"
    ],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 41,
      "protein": 0.9,
      "carbs": 10,
      "fat": 0.2,
      "fiber": 2.8,
      "sugar": 4.7,
      "sodium": 69,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Tomato",
    "commonNames": [
      'tomato',
      'tomatoes',
      'cherry tomato',
      'cherry tomatoes',
      'grape tomato',
      'grape tomatoes',
      'roma tomato',
      'plum tomato'
    ],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fat": 0.2,
      "fiber": 1.2,
      "sugar": 2.6,
      "sodium": 5,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Bell Pepper",
    "commonNames": [
      "bell pepper",
      "capsicum",
      "sweet pepper"
    ],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 31,
      "protein": 1,
      "carbs": 6,
      "fat": 0.3,
      "fiber": 2.1,
      "sugar": 4.2,
      "sodium": 4,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Banana",
    "commonNames": [
      "banana",
      "bananas"
    ],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3,
      "fiber": 2.6,
      "sugar": 12,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Apple",
    "commonNames": [
      "apple",
      "apples"
    ],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 13.7,
      "fat": 0.2,
      "fiber": 2.4,
      "sugar": 10.4,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Strawberry",
    "commonNames": [
      "strawberry",
      "strawberries"
    ],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 32,
      "protein": 0.7,
      "carbs": 7.7,
      "fat": 0.3,
      "fiber": 2,
      "sugar": 4.9,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Blueberry",
    "commonNames": [
      "blueberry",
      "blueberries"
    ],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 57,
      "protein": 0.7,
      "carbs": 14,
      "fat": 0.3,
      "fiber": 2.4,
      "sugar": 10,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Milk",
    "commonNames": [
      "milk",
      "whole milk",
      "cow milk"
    ],
    "category": "dairy",
    "servingSize": 100,
    "servingUnit": "ml",
    "nutrition": {
      "calories": 61,
      "protein": 3.2,
      "carbs": 4.9,
      "fat": 3.3,
      "fiber": 0,
      "sugar": 4.9,
      "sodium": 43,
      "cholesterol": 10,
      "saturatedFat": 1.9,
      "transFat": 0.1
    }
  },
  {
    "name": "Cheddar Cheese",
    "commonNames": [
      "cheddar",
      "cheddar cheese",
      "cheese"
    ],
    "category": "dairy",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 404,
      "protein": 25,
      "carbs": 1.4,
      "fat": 32.1,
      "fiber": 0,
      "sugar": 0.4,
      "sodium": 621,
      "cholesterol": 96,
      "saturatedFat": 18.9,
      "transFat": 1.1
    }
  },
  {
    "name": "Greek Yogurt",
    "commonNames": [
      "greek yogurt",
      "yogurt"
    ],
    "category": "dairy",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 59,
      "protein": 10,
      "carbs": 3.5,
      "fat": 0.4,
      "fiber": 0,
      "sugar": 3.5,
      "sodium": 35,
      "cholesterol": 3,
      "saturatedFat": 0.2,
      "transFat": 0
    }
  },
  {
    "name": "Butter",
    "commonNames": [
      "butter",
      "salted butter"
    ],
    "category": "fat",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 729,
      "protein": 0.7,
      "carbs": 0,
      "fat": 85.7,
      "fiber": 0,
      "sugar": 0,
      "sodium": 650,
      "cholesterol": 221,
      "saturatedFat": 52.1,
      "transFat": 3.6
    }
  },
  {
    "name": "Olive Oil",
    "commonNames": [
      "olive oil",
      "extra virgin olive oil"
    ],
    "category": "fat",
    "servingSize": 100,
    "servingUnit": "ml",
    "nutrition": {
      "calories": 915,
      "protein": 0,
      "carbs": 0,
      "fat": 107.7,
      "fiber": 0,
      "sugar": 0,
      "sodium": 0,
      "cholesterol": 0,
      "saturatedFat": 15.4,
      "transFat": 0
    }
  },
  {
    "name": "Avocado",
    "commonNames": [
      "avocado"
    ],
    "category": "fat",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 160,
      "protein": 2,
      "carbs": 8.5,
      "fat": 15,
      "fiber": 6.7,
      "sugar": 0.7,
      "sodium": 7,
      "cholesterol": 0,
      "saturatedFat": 2.1,
      "transFat": 0
    }
  },
  {
    "name": "Peanut Butter",
    "commonNames": [
      "peanut butter"
    ],
    "category": "fat",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 588,
      "protein": 25,
      "carbs": 21.9,
      "fat": 50,
      "fiber": 5.9,
      "sugar": 9.4,
      "sodium": 459,
      "cholesterol": 0,
      "saturatedFat": 10.3,
      "transFat": 0
    }
  },
  {
    "name": "Sugar",
    "commonNames": [
      "sugar",
      "white sugar",
      "granulated sugar"
    ],
    "category": "sweetener",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 400,
      "protein": 0,
      "carbs": 100,
      "fat": 0,
      "fiber": 0,
      "sugar": 100,
      "sodium": 0,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Honey",
    "commonNames": [
      "honey"
    ],
    "category": "sweetener",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 305,
      "protein": 0.5,
      "carbs": 81,
      "fat": 0,
      "fiber": 0,
      "sugar": 81,
      "sodium": 5,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "All-Purpose Flour",
    "commonNames": [
      "flour",
      "all purpose flour",
      "white flour"
    ],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 364,
      "protein": 10.4,
      "carbs": 76,
      "fat": 1,
      "fiber": 2.7,
      "sugar": 0.2,
      "sodium": 2,
      "cholesterol": 0,
      "saturatedFat": 0.2,
      "transFat": 0
    }
  },
  {
    "name": "Onion",
    "commonNames": [
      "onion",
      "onions",
      "yellow onion"
    ],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 40,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.1,
      "fiber": 1.7,
      "sugar": 4.2,
      "sodium": 4,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Garlic",
    "commonNames": [
      "garlic",
      "garlic cloves"
    ],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 133,
      "protein": 6.7,
      "carbs": 33.3,
      "fat": 0,
      "fiber": 3.3,
      "sugar": 0,
      "sodium": 33,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Black Beans",
    "commonNames": [
      "black beans",
      "beans"
    ],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 132,
      "protein": 8.9,
      "carbs": 24,
      "fat": 0.5,
      "fiber": 8.7,
      "sugar": 0.3,
      "sodium": 2,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Lentils",
    "commonNames": [
      "lentils",
      "cooked lentils"
    ],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 116,
      "protein": 9,
      "carbs": 20,
      "fat": 0.4,
      "fiber": 7.9,
      "sugar": 1.8,
      "sodium": 2,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  // 🍞 GRAINS (7)
  {
    "name": "Quinoa",
    "commonNames": ["quinoa", "cooked quinoa"],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 120,
      "protein": 4.4,
      "carbs": 21,
      "fat": 1.9,
      "fiber": 2.8,
      "sugar": 0.9,
      "sodium": 7,
      "cholesterol": 0,
      "saturatedFat": 0.2,
      "transFat": 0
    }
  },
  {
    "name": "Tortilla",
    "commonNames": ["tortilla", "flour tortilla", "wrap"],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 218,
      "protein": 5.7,
      "carbs": 36,
      "fat": 5.6,
      "fiber": 2.2,
      "sugar": 2.6,
      "sodium": 408,
      "cholesterol": 0,
      "saturatedFat": 1.4,
      "transFat": 0
    }
  },
  {
    "name": "Bagel",
    "commonNames": ["bagel", "plain bagel"],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 257,
      "protein": 10,
      "carbs": 51,
      "fat": 1.7,
      "fiber": 2.3,
      "sugar": 7.6,
      "sodium": 443,
      "cholesterol": 0,
      "saturatedFat": 0.3,
      "transFat": 0
    }
  },
  {
    "name": "Couscous",
    "commonNames": ["couscous", "cooked couscous"],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 112,
      "protein": 3.8,
      "carbs": 23,
      "fat": 0.2,
      "fiber": 1.4,
      "sugar": 0.1,
      "sodium": 5,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Crackers",
    "commonNames": ["crackers", "saltine crackers"],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 502,
      "protein": 9.4,
      "carbs": 60,
      "fat": 24,
      "fiber": 2.2,
      "sugar": 2.8,
      "sodium": 732,
      "cholesterol": 0,
      "saturatedFat": 5.7,
      "transFat": 0
    }
  },
  {
    "name": "Cereal",
    "commonNames": ["cereal", "breakfast cereal"],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 379,
      "protein": 8,
      "carbs": 84,
      "fat": 3,
      "fiber": 3,
      "sugar": 24,
      "sodium": 450,
      "cholesterol": 0,
      "saturatedFat": 0.5,
      "transFat": 0
    }
  },
  {
    "name": "Pita Bread",
    "commonNames": ["pita", "pita bread"],
    "category": "grain",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 275,
      "protein": 9,
      "carbs": 56,
      "fat": 1.2,
      "fiber": 2.2,
      "sugar": 2,
      "sodium": 536,
      "cholesterol": 0,
      "saturatedFat": 0.2,
      "transFat": 0
    }
  },

  // 🥦 VEGETABLES (11)
  {
    "name": "Cucumber",
    "commonNames": ["cucumber", "cucumbers"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 15,
      "protein": 0.7,
      "carbs": 3.6,
      "fat": 0.1,
      "fiber": 0.5,
      "sugar": 1.7,
      "sodium": 2,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Lettuce",
    "commonNames": ["lettuce", "green lettuce", "romaine"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 15,
      "protein": 1.4,
      "carbs": 2.9,
      "fat": 0.2,
      "fiber": 1.3,
      "sugar": 0.8,
      "sodium": 28,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Mushroom",
    "commonNames": ["mushroom", "mushrooms", "white mushroom"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 22,
      "protein": 3.1,
      "carbs": 3.3,
      "fat": 0.3,
      "fiber": 1,
      "sugar": 2,
      "sodium": 5,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Potato",
    "commonNames": ["potato", "potatoes", "white potato"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fat": 0.1,
      "fiber": 2.1,
      "sugar": 0.8,
      "sodium": 6,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Sweet Potato",
    "commonNames": ["sweet potato", "sweet potatoes", "yam"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 86,
      "protein": 1.6,
      "carbs": 20,
      "fat": 0.1,
      "fiber": 3,
      "sugar": 4.2,
      "sodium": 55,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Zucchini",
    "commonNames": ["zucchini", "courgette"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 17,
      "protein": 1.2,
      "carbs": 3.1,
      "fat": 0.3,
      "fiber": 1,
      "sugar": 2.5,
      "sodium": 8,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Celery",
    "commonNames": ["celery", "celery stalk"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 14,
      "protein": 0.7,
      "carbs": 3,
      "fat": 0.2,
      "fiber": 1.6,
      "sugar": 1.3,
      "sodium": 80,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Kale",
    "commonNames": ["kale", "curly kale"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 35,
      "protein": 2.9,
      "carbs": 4.4,
      "fat": 1.5,
      "fiber": 4.1,
      "sugar": 0.8,
      "sodium": 53,
      "cholesterol": 0,
      "saturatedFat": 0.2,
      "transFat": 0
    }
  },
  {
    "name": "Cauliflower",
    "commonNames": ["cauliflower"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 25,
      "protein": 1.9,
      "carbs": 5,
      "fat": 0.3,
      "fiber": 2,
      "sugar": 1.9,
      "sodium": 30,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Eggplant",
    "commonNames": ["eggplant", "aubergine"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 25,
      "protein": 1,
      "carbs": 6,
      "fat": 0.2,
      "fiber": 3,
      "sugar": 3.5,
      "sodium": 2,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Asparagus",
    "commonNames": ["asparagus"],
    "category": "vegetable",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 20,
      "protein": 2.2,
      "carbs": 3.9,
      "fat": 0.1,
      "fiber": 2.1,
      "sugar": 1.9,
      "sodium": 2,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },

  // 🍎 FRUITS (9)
  {
    "name": "Orange",
    "commonNames": ["orange", "oranges"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fat": 0.1,
      "fiber": 2.4,
      "sugar": 9,
      "sodium": 0,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Grape",
    "commonNames": ["grape", "grapes"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 69,
      "protein": 0.7,
      "carbs": 18,
      "fat": 0.2,
      "fiber": 0.9,
      "sugar": 16,
      "sodium": 2,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Watermelon",
    "commonNames": ["watermelon"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 30,
      "protein": 0.6,
      "carbs": 7.6,
      "fat": 0.2,
      "fiber": 0.4,
      "sugar": 6.2,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Mango",
    "commonNames": ["mango", "mangoes"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fat": 0.4,
      "fiber": 1.6,
      "sugar": 14,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Pineapple",
    "commonNames": ["pineapple", "fresh pineapple"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 50,
      "protein": 0.5,
      "carbs": 13,
      "fat": 0.1,
      "fiber": 1.4,
      "sugar": 10,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Lemon",
    "commonNames": ["lemon", "lemons"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 29,
      "protein": 1.1,
      "carbs": 9,
      "fat": 0.3,
      "fiber": 2.8,
      "sugar": 2.5,
      "sodium": 2,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Peach",
    "commonNames": ["peach", "peaches"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 39,
      "protein": 0.9,
      "carbs": 10,
      "fat": 0.3,
      "fiber": 1.5,
      "sugar": 8,
      "sodium": 0,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Pear",
    "commonNames": ["pear", "pears"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 57,
      "protein": 0.4,
      "carbs": 15,
      "fat": 0.1,
      "fiber": 3.1,
      "sugar": 10,
      "sodium": 1,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },
  {
    "name": "Kiwi",
    "commonNames": ["kiwi", "kiwifruit"],
    "category": "fruit",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 61,
      "protein": 1.1,
      "carbs": 15,
      "fat": 0.5,
      "fiber": 3,
      "sugar": 9,
      "sodium": 3,
      "cholesterol": 0,
      "saturatedFat": 0,
      "transFat": 0
    }
  },

  // 🥩 PROTEINS (5)
  {
    "name": "Tuna",
    "commonNames": ["tuna", "tuna fish", "canned tuna"],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 144,
      "protein": 30,
      "carbs": 0,
      "fat": 1,
      "fiber": 0,
      "sugar": 0,
      "sodium": 50,
      "cholesterol": 47,
      "saturatedFat": 0.2,
      "transFat": 0
    }
  },
  {
    "name": "Shrimp",
    "commonNames": ["shrimp", "prawns"],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 99,
      "protein": 24,
      "carbs": 0.2,
      "fat": 0.3,
      "fiber": 0,
      "sugar": 0,
      "sodium": 111,
      "cholesterol": 189,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Tofu",
    "commonNames": ["tofu", "bean curd"],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 76,
      "protein": 8,
      "carbs": 1.9,
      "fat": 4.8,
      "fiber": 0.3,
      "sugar": 0.6,
      "sodium": 7,
      "cholesterol": 0,
      "saturatedFat": 0.7,
      "transFat": 0
    }
  },
  {
    "name": "Chickpeas",
    "commonNames": ["chickpeas", "garbanzo beans"],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 164,
      "protein": 8.9,
      "carbs": 27,
      "fat": 2.6,
      "fiber": 7.6,
      "sugar": 4.8,
      "sodium": 7,
      "cholesterol": 0,
      "saturatedFat": 0.3,
      "transFat": 0
    }
  },
  {
    "name": "Pork",
    "commonNames": ["pork", "pork chop"],
    "category": "protein",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 242,
      "protein": 27,
      "carbs": 0,
      "fat": 14,
      "fiber": 0,
      "sugar": 0,
      "sodium": 62,
      "cholesterol": 80,
      "saturatedFat": 5,
      "transFat": 0
    }
  },

  // 🥛 DAIRY (5)
  {
    "name": "Yogurt",
    "commonNames": ["yogurt", "plain yogurt"],
    "category": "dairy",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 59,
      "protein": 10,
      "carbs": 3.6,
      "fat": 0.4,
      "fiber": 0,
      "sugar": 3.2,
      "sodium": 36,
      "cholesterol": 5,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
    "name": "Cottage Cheese",
    "commonNames": ["cottage cheese"],
    "category": "dairy",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 98,
      "protein": 11,
      "carbs": 3.4,
      "fat": 4.3,
      "fiber": 0,
      "sugar": 2.7,
      "sodium": 364,
      "cholesterol": 17,
      "saturatedFat": 1.7,
      "transFat": 0
    }
  },
  {
    "name": "Cream Cheese",
    "commonNames": ["cream cheese"],
    "category": "dairy",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 342,
      "protein": 5.9,
      "carbs": 5.5,
      "fat": 34,
      "fiber": 0,
      "sugar": 3.2,
      "sodium": 321,
      "cholesterol": 110,
      "saturatedFat": 19.3,
      "transFat": 0
    }
  },
  {
    "name": "Sour Cream",
    "commonNames": ["sour cream"],
    "category": "dairy",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 198,
      "protein": 2.4,
      "carbs": 4.6,
      "fat": 19,
      "fiber": 0,
      "sugar": 0.4,
      "sodium": 51,
      "cholesterol": 52,
      "saturatedFat": 12.1,
      "transFat": 0
    }
  },
  {
    "name": "Heavy Cream",
    "commonNames": ["heavy cream", "whipping cream"],
    "category": "dairy",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 340,
      "protein": 2.1,
      "carbs": 2.8,
      "fat": 36,
      "fiber": 0,
      "sugar": 2.9,
      "sodium": 38,
      "cholesterol": 137,
      "saturatedFat": 23,
      "transFat": 0
    }
  },

  // 🧂 OTHER (1)
  {
    "name": "Soy Sauce",
    "commonNames": ["soy sauce"],
    "category": "other",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 53,
      "protein": 5.6,
      "carbs": 4.9,
      "fat": 0.6,
      "fiber": 0.8,
      "sugar": 0.4,
      "sodium": 5637,
      "cholesterol": 0,
      "saturatedFat": 0.1,
      "transFat": 0
    }
  },
  {
  name: 'Salt',
  commonNames: ['salt', 'table salt', 'sea salt', 'kosher salt'],
  category: 'seasoning',
  servingSize: 100,
  servingUnit: 'g',
  nutrition: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    sodium: 38758,
    cholesterol: 0,
    saturatedFat: 0,
    transFat: 0
  }
},
{
  name: 'Black Pepper',
  commonNames: ['black pepper', 'pepper', 'ground pepper', 'pepper powder'],
  category: 'seasoning',
  servingSize: 100,
  servingUnit: 'g',
  nutrition: {
    calories: 251,
    protein: 10.4,
    carbs: 64,
    fat: 3.3,
    fiber: 25.3,
    sugar: 0.6,
    sodium: 20,
    cholesterol: 0,
    saturatedFat: 1,
    transFat: 0
  }
},
{
  name: 'Sesame Oil',
  commonNames: ['sesame oil', 'toasted sesame oil'],
  category: 'other',
  servingSize: 100,
  servingUnit: 'ml',
  nutrition: {
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100
  }
},
{
  name: 'Cinnamon',
  commonNames: ['cinnamon', 'ground cinnamon', 'cinnamon powder'],
  category: 'seasoning',
  servingSize: 100,
  servingUnit: 'g',
  nutrition: {
    calories: 247,
    protein: 4,
    carbs: 81,
    fat: 1.2,
    fiber: 53,
    sugar: 2.2,
    sodium: 10,
    cholesterol: 0,
    saturatedFat: 0.3,
    transFat: 0
  }
},
{
  name: 'Vanilla Extract',
  commonNames: ['vanilla extract', 'vanilla', 'pure vanilla extract'],
  category: 'seasoning',
  servingSize: 100,
  servingUnit: 'ml',
  nutrition: {
    calories: 288,
    protein: 0.1,
    carbs: 12.7,
    fat: 0.1,
    fiber: 0,
    sugar: 12.7,
    sodium: 9,
    cholesterol: 0,
    saturatedFat: 0,
    transFat: 0
  }
},
{
  name: 'Ice',
  commonNames: ['ice', 'ice cubes', 'crushed ice'],
  category: 'other',
  servingSize: 100,
  servingUnit: 'g',
  nutrition: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    sodium: 0,
    cholesterol: 0,
    saturatedFat: 0,
    transFat: 0
  }
},
{
  name: 'Red Pepper Flakes',
  commonNames: ['red pepper flakes', 'crushed red pepper', 'chili flakes'],
  category: 'seasoning',
  servingSize: 100,
  servingUnit: 'g',
  nutrition: {
    calories: 318,
    protein: 12,
    carbs: 57,
    fat: 14.5,
    fiber: 27.2,
    sugar: 10.3,
    sodium: 91,
    cholesterol: 0,
    saturatedFat: 2.5,
    transFat: 0
  }
},
{
  name: 'Parmesan Cheese',
  commonNames: [
    'parmesan',
    'parmesan cheese',
    'parmigiano',
    'parmigiano reggiano',
    'grated parmesan',
    'shredded parmesan'
  ],
  category: 'dairy',
  servingSize: 100,
  servingUnit: 'g',
  nutrition: {
    calories: 431,
    protein: 38,
    carbs: 4.1,
    fat: 29,
    fiber: 0,
    sugar: 0.9,
    sodium: 1529,
    cholesterol: 88,
    saturatedFat: 19,
    transFat: 0
  }
}
];

module.exports = foods;