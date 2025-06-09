import React from 'react'
import AllCompilers from '../components/AllCompilers';
import cardTemplates from '../designs/cardTemplates'
import SideBar from '../components/SideBar'

const CardPage = () => {
   
  return (
   
    <div className="min-h-screen w-full bg-gray-100 dark:bg-[#3E0B18] py-10 px-4">
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Card Designs Playground
        </h1>

        <div className='flex flex-col gap-20'>
          <AllCompilers templateType={cardTemplates}/>
        </div>
      </div>
    </div>
  );
}

export default CardPage
