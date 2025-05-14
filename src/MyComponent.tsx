import React, { useState } from 'react';

// This component is:
// 1. Exported as default (as per requirement #1)
// 2. Uses Tailwind CSS (as per requirement #2)
// 3. Self-contained in a single TSX file (as per requirement #3)
// 4. Uses Tailwind utility classes instead of external CSS (as per requirement #4)

const MyComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className="text-3xl font-bold mb-6 text-center">
          React with Tailwind
        </h1>
        
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm font-medium">Toggle Theme</span>
          <button 
            onClick={toggleDarkMode}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${darkMode ? 'bg-blue-600' : 'bg-gray-200'}`}
          >
            <span 
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} 
            />
          </button>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl mb-4">Counter: {count}</p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setCount(count - 1)}
              className={`px-4 py-2 rounded-md ${darkMode ? 'bg-red-700 hover:bg-red-800' : 'bg-red-500 hover:bg-red-600'} text-white transition-colors`}
            >
              Decrease
            </button>
            <button 
              onClick={() => setCount(count + 1)}
              className={`px-4 py-2 rounded-md ${darkMode ? 'bg-green-700 hover:bg-green-800' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
            >
              Increase
            </button>
          </div>
        </div>

        <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <h2 className="font-semibold mb-2">Features:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Self-contained component</li>
            <li>Tailwind CSS styling</li>
            <li>Dark/Light mode toggle</li>
            <li>Counter functionality</li>
          </ul>
        </div>
      </div>
      
      <footer className="mt-8 text-sm text-center opacity-70">
        Created with React and Tailwind CSS
      </footer>
    </div>
  );
};

export default MyComponent;
