const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Food = require('../models/Food');
const foods = require('./seedFood');

dotenv.config();

const seedDatabase = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conneted to MongoDB');

    //clear existing foods
    await Food.deleteMany({});
    console.log('cleared existing foods');

    //insert seed data
    await Food.insertMany(foods);
    console.log(`Successfully seeded ${foods.length} foods`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);   
  }
};

seedDatabase();