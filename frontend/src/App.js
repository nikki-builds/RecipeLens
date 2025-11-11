import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - Responsive */}
      <header className="bg-green-700 text-white py-4 md:py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            🍽️ RecipeLens
          </h1>
          <p className="text-blue-100 mt-1 text-sm md:text-base">
            AI-Powered Recipe Nutrition Analyzer
          </p>
        </div>
      </header>

      {/* Main Content - Responsive */}
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-8 max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
           
          </h2>
    

          {/* Test Responsive Breakpoints */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          
            <div className="space-y-1 text-xs md:text-sm">
              <p className="block sm:hidden text-blue-700">📱 Mobile (640px)</p>
              <p className="hidden sm:block md:hidden text-blue-700">📱 Tablet (640px - 768px)</p>
              <p className="hidden md:block lg:hidden text-blue-700">💻 Desktop (768px - 1024px)</p>
              <p className="hidden lg:block text-blue-700">🖥️ Large Desktop ( 1024px)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
