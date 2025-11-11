import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": 'application/json',
  },
});

export const parseRecipe = async (recipeText) => {
  const response = await api.post('/recipes/parse', { recipeText });
  return response.data;
};

export const saveRecipe = async (recipeData) => {
  const response = await api.post('/recipes/save', recipeData);
  return response.data;
};

export const getRecipes = async () => {
  const response = await api.get('/recipes');
  return response.data;
};

export const searchFoods = async (query) => {
  const response = await api.get(`/foods/search?q=${query}`);
  return response.data
};

export default api;