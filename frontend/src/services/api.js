import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": 'application/json',
  },
});

// backend POST /api/recipes/analyze 
// this one endpoint does all of parsing + nutrition calculation 
export const analyzeRecipe = async (recipeText, name = '', servings = 1) => {
  const response = await api.post('/api/recipes/analyze', { 
    recipeText,
    recipeName: name,
    servings });
  return response.data;
};

export const saveRecipe = async(recipeData) => {
  const response = await api.post('api/recipes/save', recipeData);
  return response.data;
}

// backend GET /api/recipes - calling all saved recipes
export const getAllRecipes = async () => {
  const response = await api.get('/api/recipes/');
  return response.data.data;
};

// backend GET /api/recipes/:id - calling a certain, specific recipe
export const getRecipeById = async (id) => {
  const response = await api.get(`/api/recipes/${id}`);
  return response.data;
};

// Health check (for testing connection to backend)
export const checkHealth = async () => {
  const response = await api.get('/api/health');
  return response.data
};

export default api;