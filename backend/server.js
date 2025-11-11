const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// load environment variables
dotenv.config();

// connection to database
connectDB();

// initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get('/',(req,res)=> {
  res.json({ message: 'RecipeLens API is running!'});
});

// Health check route
app.get('/api/health', (req,res)=> {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// ToDo: add routes here later
// app.use('/api/repices', recipeRoutes);
// app.use('/api/foods', foodRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
});