import React, { useState } from 'react';

function RecipeForm({ onSubmit, loading }) {
  // local stte for form inputs
  const [recipeText, setRecipeText] = useState('');
  const [name, setName] = useState('');
  const [servings, setServings] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: recipe text is required
    if (!recipeText.trim()) {
      alert('Please paste a recipe!');
      return;
    }
    // Call parent's handleAnalyzeRecipe
    onSubmit(recipeText, name, servings);
  };

  return (
    <div className='bg-white rounded-lg shadow-lg p-6 border-light'>
      <h2 className='text-2xl font-semibold mb-4 text-dark'>
        Analyze Recipe
      </h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* recipe text -required */}
        <div>
          <label
          htmlFor='recipeText'
          className='block text-sm font-medium text-dark mb-2'
          >
          Recipe Text <span className='text-primary'>*</span>
          </label>
          <textarea
            id='recipeText'
            rows={8}
            value={recipeText}
            onChange={(e) => setRecipeText(e.target.value)}
            placeholder='Paste your recipe here...'
            className='w-full px-4 py-3 border-2 border-light rounded-lg focus:outline-none focus:border-primary transition-colors resize-none'/>
        </div>

        {/* Recipe Name */}
        <div>
          <label
          htmlFor='recipeName'
          className='block text-sm font-medium text-dark mb-2'
          >
            Recipe Name <span className='text-gray-400 text-sm'>(Optional)</span>
          </label>
          <input
          id='recipeName'
          type='text'
          value={name}
          onChange={(e)=> setName (e.target.value)}
          placeholder='e.g., Scrambled Eggs'
          className='w-full px-4 py-3 border-2 border-light rounded-lg focus:outline-none focus:border-primary transition-colors'
          />
        </div>

        {/* servings - default = 1 */}
        <div>
          <label
          htmlFor='servings'
          className='block-text-sm font-medium text-dark mb-2'>
            Servings
          </label>
          <input
          id='servings'
          type='number'
          min='1'
          max='20'
          value={servings}
          onChange={(e)=> setServings(parseInt(e.target.value) || 1)}
          className='w-full px-4 py-3 border-2 border-light rounded-lg focus:outline-none focus:border-primary transition-colors'
          />
        </div>

        {/* submit button */}
        <button
        type='submit'
        disabled={loading}
        className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${loading
            ? 'bg-primary bg-opacity-60 text-white cursor-wait'
            : 'bg-primary hover:bg-opacity-90 hover:shadow-lg text-white'
            }`}
        >
          {loading ? 'Analyzing...' : 'Analyze Recipe'}

        </button>

      </form>
    </div>
  )
}

export default RecipeForm;