import React from 'react';

function NutritionSummary({ calories, protein, carbs, fat }) {
  return (
    <div className='bg-secondary rounded-lg p-6 mb-4'>
      <h3 className='text-lg font-semibold text-dark mb-4'>
        Total Nutrition
      </h3>

      <div className='grid grid-cols-2 gap-6'>
        {/* calories */}
        <div className='text-center'>
          <p className='text-4xl font-bold text-primary'>
            {Math.round(calories)}
          </p>
          <p className='text-sm text-dark mt-1 font-medium'>
            Calories
          </p>
        </div>

        {/* protein */}
        <div className='text-center'>
          <p className='text-4xl font-bold text-primary'>
            {Math.round(protein)}<span className='text-sm text-dark mt-1 font-medium'>g</span>
          </p>
          <p className='text-sm text-dark mt-1 font-medium'>
            Protein
          </p>
        </div>

        {/* Carbs */}
        <div className='text-center'>
          <p className='text-4xl font-bold text-primary'>
            {Math.round(carbs)}<span className='text-sm text-dark mt-1 font-medium'>g</span>
          </p>
          <p className='text-sm text-dark mt-1 font-medium'>
            Carbs
          </p>
        </div>

        {/* Fat */}
        <div className='text-center'>
          <p className='text-4xl font-bold text-primary'>
            {Math.round(fat)}<span className='text-sm text-dark mt-1 font-medium'>g</span>
          </p>
          <p className='text-sm text-dark mt-1 font-medium'>
            Fat
          </p>
        </div>
      </div>
    </div>
  );
}

export default NutritionSummary;