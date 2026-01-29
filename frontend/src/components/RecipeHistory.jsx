import React, { useState, useEffect, useRef } from 'react';

function RecipeHistory({ savedRecipes, onSelectRecipe, onDeleteRecipe, onFetchRecipes }) {
  // debugging:
  // console.log('🎯 RecipeHistory 받은 savedRecipes:', savedRecipes);
  // console.log('🎯 savedRecipes.length:', savedRecipes?.length);

  const [ isOpen, setIsOpen ] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch recipes when component mounts
  useEffect(() => {
    onFetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); // ,[] meaning once, first time only

  // Close dropdown when clicking outside
  useEffect(()=> {
    const handleClickOutside = (event) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
           setIsOpen(false);
      }
    };
    
    if(isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => { // cleanup: arrow function needed
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [isOpen]); // --> whenever 'isOpen' changes

  const handleRecipeClick = (recipe) => {
    onSelectRecipe(recipe); // 1. alerts App.js "this recipe is chosen"
    setIsOpen(false);       // 2. close the dropdown 
  };

  // ADDED: Handle delete button click
  const handleDeleteClick = (e, recipeId) => {
    e.stopPropagation(); // avoid parent button click event
    
    if(window.confirm(`Are you sure you want to delete this recipe?`)) {
      onDeleteRecipe(recipeId);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000); // 1 sec = 1000ms
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className='relative' ref={dropdownRef}>
      {/* 1. BUTTON */}
      <button
        onClick={()=> setIsOpen(!isOpen)}
        className='bg-light hover:bg-secondary text-dark px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2'
        >
          <span>My Recipes</span>
          <span className='bg-primary text-white px-2 py-0.5 rounded-full text-sm'>
            {savedRecipes.length}
          </span>
          {/* Dropdown arrow */}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            >
            <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
            />
          </svg>
      </button>

      {/* DROPDOWN Menu */}
      {isOpen && (
        <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border-2 border-light z-50 max-h-96 overflow-y-auto animate-slideInUp'>
          {savedRecipes.length === 0 ? (
            // empty state
            <div className='p-6 text-center'>
              <p className='text-gray-500 text-sm'>No saved recipes yet</p>
              <p className='text-gray-400 text-xs mt-2'>
                Analyze a recipe to get started!
              </p>
            </div>
          ) : (
                // Recipe list
            <div className='py-2'>
              {savedRecipes.map((recipe) => (
                <div
                  key={recipe._id}
                  onClick={() => handleRecipeClick(recipe)}
                  className='w-full px-4 py-3 hover:bg-secondary transition-colors text-left border-b border-light last:border-b-0 cursor-pointer'
                >
                  {/* Recipe Name and Date */}  
                  <div className='flex justify-between items-start mb-1'>
                    <h4 className='font-semibold text-dark text-sm'>
                      {recipe.name || 'Untitled Recipe'}
                    </h4>
                    <span className='text-xs text-gray-400'>
                      {formatDate(recipe.createdAt)}
                    </span>  
                  </div>  

                  {/* Quick nutrition preview */}
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3 text-xs text-gray-600 mb-1'>
                      <span>
                        🔥 {Math.round(recipe.totalNutrition.calories)} cal
                      </span>
                      <span>
                        🥩 {Math.round(recipe.totalNutrition.protein)}g
                      </span>
                      <span>
                        🍞 {Math.round(recipe.totalNutrition.carbs)}g
                      </span>
                      <span>
                        🥑 {Math.round(recipe.totalNutrition.fat)}g
                      </span>
                    </div>
                  </div>

    

                  {/* Servings info */}
                  <div className='flex justify-between items-center'>

                    <div className='text-xs text-gray-400 mt-1'>
                      {recipe.servings} {recipe.servings === 1 ? 'serving' : 'servings'} • {recipe.ingredients.length} ingredients
                    </div>

                  {/* DELETE button */}
                      <button
                        onClick={(e)=> handleDeleteClick(e, recipe._id)}
                        className='text-gray-400 hover:text-red-500 transition-colors p-1'
                        title='Delete recipe' 
                      >
                        🗑️
                      </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RecipeHistory;