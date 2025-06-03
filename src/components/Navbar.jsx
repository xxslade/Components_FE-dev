import React from 'react'
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center py-4 px-8 bg-[#1e293b]">
        <div className="text-xl font-bold text-red-200 ml-[20px]">
          COMPONENTS
        </div>

        <div className="flex items-center gap-2 border px-2 py-1 rounded">
          <input
            type="text"
            placeholder='Search'
            className="outline-none placeholder-white"
          />
          <IoSearch />
        </div>

        <div className='flex flex-row gap-8 mr-[80px]'>
          
          <NavLink to="/" className="text-white"> Home </NavLink>
          <span className='text-white'>Explore</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
