import React from 'react'
import DynamicCompiler from '../components/DynamicCompiler'
import navTemplates from './designs/navTemplates'

const NavPage = () => {
  const allCompilers = Object.entries(navTemplates).map(([key, code]) => (
    <div
      key={key}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
    >
      <DynamicCompiler defaultCode={code} />
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          HTML Navbar Designs Playground
        </h1>

        <div className='flex flex-col gap-10'>
          {allCompilers}
        </div>
      </div>
    </div>
  );
}

export default NavPage
