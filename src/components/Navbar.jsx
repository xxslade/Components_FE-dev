import React from 'react'
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo10.png'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center py-4 px-8 bg-[#310410]">
        <img src={logo} alt="LOGO" className='w-30 h-[60px]'/>

        <div className="flex items-center gap-2 border px-2 py-1 rounded">
          <input
            type="text"
            placeholder='Search'
            className="outline-none placeholder-white"
          />
          <IoSearch />
        </div>

        <div className='flex flex-row gap-8 mr-[40px]'>
          
          <NavLink to="/" className="text-white"> Home </NavLink>
          <span className='text-white'>Explore</span>

          <div className='flex gap-4'>
            <Link to="/signup">
              <button className='bg-yellow-500 px-4 py-2 rounded text-white'>
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className='bg-yellow-500 px-4 py-2 rounded text-white'>
                Login
              </button>
            </Link>

          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
