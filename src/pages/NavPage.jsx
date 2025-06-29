import React from 'react'
import navTemplates from '../designs/navTemplates'
import AllCompilers from '../components/AllCompilers'

const NavPage = () => {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#3E0B18] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Navbar Designs Playground
        </h1>

        <div className='flex flex-col gap-10'>
          <AllCompilers templateType={navTemplates}/>
        </div>
      </div>
    </div>
  );
}

export default NavPage
