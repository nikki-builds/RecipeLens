import React from 'react';

function IngredientList({ ingredients }) {

  return (
    <div className='mb-4'>
      <h3 className='text-lg font-semibold text-dark mb-3'>
        Ingredient Breakdown
      </h3>

      {/* table container (able to scroll in mobile) */}
      <div className='overflow-x-auto rounded-lg border-2 border-light'>
        <table className='w-full'>

          {/* table header */}
          <thead className='bg-dark text-white'>
            <tr>
              <th className='px-4 py-3 text-left text-sm font-semibold'>
                Ingredient
              </th>
              <th className='px-4 py-3 text-left text-sm font-semibold'>
                Amount
              </th>
              <th className='px-4 py-3 text-center text-sm font-semibold'>
                Calories
              </th>
              <th className='px-4 py-3 text-center text-sm font-semibold table-cell'>
                Protein
              </th>
              <th className='px-4 py-3 text-center text-sm font-semibold table-cell'>
                Carbs
              </th>
              <th className='px-4 py-3 text-center text-sm font-semibold table-cell'>
                Fat
              </th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className='bg-white'>
            {ingredients.map((ingredient, index) => (
              <tr
              key={index}
              className={`border-b border-light hover:bg-secondary transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-light bg-opacity-30'}`}
              >
                {/* Ingredient Name */}
                <td className='px-4 py-3 text-sm font-medium text-dark capitalize'>
                  {ingredient.name}
                </td>

                {/* Amount */}
                <td className='px-4 py-3 text-sm text-gray-600'>
                  {ingredient.amount} {ingredient.unit}
                </td>

                {/* Calories */}
                <td className='px-4 py-3 text-sm text-center font-medium text-dark'>
                  {ingredient.nutrition ? Math.round(ingredient.nutrition.calories) : 'N/A'}
                </td>

                {/* Protein */}
                <td className='px-4 py-3 text-sm text-center text-gray-600'>
                  {ingredient.nutrition ? Math.round(ingredient.nutrition.protein) : 'N/A'}
                </td>

                {/* Carbs */}
                <td className='px-4 py-3 text-sm text-center text-gray-600'>
                  {ingredient.nutrition ? Math.round(ingredient.nutrition.carbs) : 'N/A'}
                </td>

                {/* Fat */}
                <td className='px-4 py-3 text-sm text-center text-gray-600'>
                  {ingredient.nutrition ? Math.round(ingredient.nutrition.fat) : 'N/A'}
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* Matched Count Info */}
      <p className='text-xs text-gray-500 mt-2'>
        {ingredients.filter(i => i.matched).length} of {ingredients.length} ingredients matched in database
      </p>
    </div>
  )



}

export default IngredientList;