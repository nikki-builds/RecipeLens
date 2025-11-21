import React from 'react';
import { useState, useEffect } from 'react';
import { Toaster, toast} from 'react-hot-toast';
import { analyzeRecipe, getAllRecipes } from './services/api';



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
    try {
      const recipes = await getAllRecipes();
      setSavedRecipes(recipes);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
      toast.error('Failed to load recipe history');
    }
  };


  return (
    <div className='min-h-screen bg-background'>
      <Toaster position="top-right" />

      {/* Header - Dark 색상 사용 */}
      <header className='bg-dark shadow-lg border-b-2 border-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex justify-between items-center'>
            {/* Logo/Title */}
            <h1 className='text-3xl font-bold text-white'>
              Recipe<span className='text-primary'>Lens</span>
            </h1>

            {/* RecipeHistory Dropdown */}
            <button className='bg-light hover:bg-secondary text-dark px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2'>
              <span>My Recipes</span>
              <span className='bg-primary text-white px-2 py-0.5 rounded-full text-sm'>
                {savedRecipes.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
  <div className='flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start transition-all duration-500'>
    
    {/* RecipeForm - 제자리 유지 */}
    <div className='w-full sm:w-[520px]'>
      <div className='bg-white rounded-lg shadow-lg p-6 border-2 border-light'>
        <h2 className='text-2xl font-semibold mb-4 text-dark'>
          Analyze Recipe
        </h2>
        <div className='space-y-4'>
          <p className='text-gray-600'>RecipeForm placeholder</p>
          <button 
            onClick={() => setCurrentRecipe({ test: 'data' })}
            className='w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg'
          >
            Test: Analyze Recipe
          </button>
        </div>
      </div>
    </div>

    {/* RecipeResults - Fade in only */}
    {currentRecipe && (
      <div className='w-full sm:w-[520px] animate-slideInRight'>
        <div className='bg-white rounded-lg shadow-lg p-6 border-2 border-light'>
          <h2 className='text-2xl font-semibold mb-4 text-dark'>
            Nutrition Analysis
          </h2>
          <div className='bg-secondary rounded-lg p-4 mb-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='text-center'>
                <p className='text-3xl font-bold text-primary'>320</p>
                <p className='text-sm text-dark'>Calories</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold text-primary'>18g</p>
                <p className='text-sm text-dark'>Protein</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold text-primary'>12g</p>
                <p className='text-sm text-dark'>Carbs</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold text-primary'>20g</p>
                <p className='text-sm text-dark'>Fat</p>
              </div>
            </div>
          </div>
          <pre className='mt-4 text-xs bg-light p-3 rounded overflow-auto max-h-60'>
            {JSON.stringify(currentRecipe, null, 2)}
          </pre>
        </div>
      </div>
    )}

  </div>
</main>
    </div>
  );
}

export default App;
