import React from 'react';
import buttonTemplates from './designs/buttonTemplates';
import DynamicCompiler from '../components/DynamicCompiler';

const ButtonPage = () => {
  const allCompilers = Object.entries(buttonTemplates).map(([key, code]) => (
    <div
      key={key}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition duration-300"
    >
      <DynamicCompiler defaultCode={code} />
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          HTML Button Designs Playground
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allCompilers}
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
