import React from 'react';
import buttonTemplates from '../designs/buttonTemplates';
import AllCompilers from '../components/AllCompilers';

const ButtonPage = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          HTML Button Designs Playground
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AllCompilers templateType={buttonTemplates}/>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
