import React from 'react';
import footerTemplates from '../designs/footerTemplates';
import AllCompilers from '../components/AllCompilers';
import Sidebar from '../components/Sidebar';

const FooterPage = () => {
  
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-[#3E0B18] py-10 px-4">
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Footer Designs Playground
        </h1>

        <div className='flex flex-col gap-20'>
          <AllCompilers templateType={footerTemplates}/>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
