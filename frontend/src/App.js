import React from 'react';
import { useState, useEffect } from 'react';
import { Toaster, toast} from 'react-hot-toast';
import { analyzeRecipe, getAllRecipes } from './services/api';
import RecipeForm from './components/RecipeForm';
import NutritionSummary from './components/NutritionSummary';
import IngredientList from './components/IngredientList';
import RecipeHistory from './components/RecipeHistory';



function App() {
  // 1. current analyzed recipe (RecipeResults 에 표시)
  const [ currentRecipe, setCurrentRecipe ] = useState(null);
  // 2. saved recipes (RecipeHistory dropdown에 표시)
  const [ savedRecipes, setSavedRecipes ] = useState([]);
  // 3. loading status (spinner when being analyzed)
  const [ loading, setLoading ] = useState(false);

  // Todo: add components and logic

  // called when submitted from RecipeForm
  const handleAnalyzeRecipe = async (recipeText, name, servings) => {
    setLoading(true);

    try {
      // call analyzeRecipe from api.js
      const result = await analyzeRecipe(recipeText, name, servings);
      setCurrentRecipe(result);

      // console.log(result.data.ingredients);

      toast.success('Recipe analyzed successfully!');

      // now new recipe is saved, UPDATE savedRecpie
      await fetchSavedRecipes();

    } catch (error) {
      console.error('Analysis failed:', error);

      // matchedCount === 0 error (error that backend threw)
      if (error.response?.status === 400) {
        toast.error('No matching ingredients found in database');
      } else {
        toast.error('Failed to analyze recipe. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // RecipeHistory dropdown 
  const fetchSavedRecipes = async ()=> {
    //  console.log('🔍 fetchSavedRecipes');
    try {
      const recipes = await getAllRecipes();
      setSavedRecipes(recipes);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
      toast.error('Failed to load recipe history');
    }
  };

  // Load a saved recipe from history
  const handleSelectRecipe = (recipe) => {
    // transform saved recipe format to match currentRecipe format
    const formattedRecipe = {
      success: true,
      data: {
        recipeId: recipe._id,
        name: recipe.name,
        ingredients: recipe.ingredients,
        totalNutrition: recipe.totalNutrition,
        servings: recipe.servings,
        matchedCount: recipe.ingredients.filter(i=> i.matched).length,
        totalCount: recipe.ingredients.length
      }
    };
    setCurrentRecipe(formattedRecipe);
    toast.success('Recipe loaded!');
  };


  return (
    <div className='min-h-screen bg-background'>
      <Toaster position="top-right" />

      {/* Header */}
      <header className='bg-dark shadow-lg border-b-2 border-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex justify-between items-center'>
            {/* Logo/Title */}
            <h1 className='text-3xl font-bold text-white'>
              Recipe<span className='text-primary'>Lens</span>
            </h1>

            {/* RecipeHistory Dropdown */}
            <RecipeHistory
            savedRecipes={savedRecipes}
            onSelectRecipe={handleSelectRecipe}
            onFetchRecipes={fetchSavedRecipes}
            />
             {/* what's above replaced the button below */}
            {/* <button className='bg-light hover:bg-secondary text-dark px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2'>
              <span>My Recipes</span>
              <span className='bg-primary text-white px-2 py-0.5 rounded-full text-sm'>
                {savedRecipes.length}
              </span>
            </button> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start transition-all duration-500'>
    
    {/* RecipeForm Component */}
    <div className='w-full sm:w-[520px]'>
     <RecipeForm
        onSubmit={handleAnalyzeRecipe}
        loading={loading} 
      />
    </div>

    {/* RecipeResults - Fade in only */}
    {currentRecipe && (
      <div className='w-full sm:w-[520px]'>
    <div className={`bg-white rounded-lg shadow-lg p-6 border-2 border-light ${
      'animate-slideInUp lg:animate-slideInRight'
    }`}>
          <h2 className='text-2xl font-semibold mb-4 text-dark'>
            Nutrition Analysis
          </h2>

          {/* NutritionSummary Component */}
          <NutritionSummary
            calories={currentRecipe.data.totalNutrition.calories}
            protein={currentRecipe.data.totalNutrition.protein}
            carbs={currentRecipe.data.totalNutrition.carbs}
            fat={currentRecipe.data.totalNutrition.fat} 
          />

          {/* IngredientList Component */}
          <IngredientList
            ingredients={currentRecipe.data.ingredients}
          />

        </div>
      </div>
    )}

  </div>
</main>
    </div>
  );
}

export default App;
