import React from 'react';
import sidebarTemplates from '../designs/sidebarTemplates';
import AllCompilers from '../components/AllCompilers';
import Sidebar from '../components/Sidebar';

const sidebarPage = () => {
  
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-[#3E0B18] py-10 px-4">
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Sidebar Designs Playground
        </h1>

        <div className='flex flex-col gap-20'>
          <AllCompilers templateType={sidebarTemplates}/>
        </div>
      </div>
    </div>
  );
};

export default sidebarPage;
