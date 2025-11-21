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

// Routes
// test route
app.get('/',(req,res)=> {
  res.json({ 
    message: 'RecipeLens API is running!',
    version:'1.0.0',
    endpoints: {
      health: '/api/health',
      recipes: 'api/recipes'
    }
  });
});

// Health check Route
app.get('/api/health', (req,res)=> {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// ToDo: add routes here later
// app.use('/api/repices', recipeRoutes);)
// app.use('/api/foods', foodRoutes);

// API Routes
app.use('/api/recipes', require('./routes/recipeRoutes'));


// 404 Handler
app.use((req,res) => {
  res.status(404).json({
    succes: false,
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});


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