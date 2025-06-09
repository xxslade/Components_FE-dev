import React from 'react';
import { Link } from 'react-router-dom';
import ai from '../assets/ai10.png';
import snippet from '../assets/snippet1.png';
import icon from '../assets/icon.png'
import logo from '../assets/logo7.png';
import hero from '../assets/hero1.png'
import HomePageCard from '../components/HomePageCard';
import Sidebar from '../components/SideBar';

const HomePage = () => {
  const mainBgColor = "#3E0B18";
  return (
    // <div className="min-h-screen flex bg-gray-100 dark:bg-[#0f172a]">
    //   <Sidebar collapsedBg={mainBgColor} />
      <div className='w-full'>

        {/* hero section */}

        <div className="bg-[#3E0B18] text-white py-18 px-10">
          {/* Container for text */}
          <div className="max-w-7xl mx-auto flex flex-col gap-20">

            {/* Top section with heading and CTA */}
            <div className="flex flex-row justify-between items-start w-full">
              {/* Heading */}
              <div className="flex-1">
                <h1 className="text-7xl font-cormorant leading-tight tracking-tight mt-12">
                  Discover Your Ultimate <br />
                  UI Component Library
                </h1>
              </div>

              {/* Description and Buttons */}
              <div className="flex-1 max-w-md space-y-16">

                <p className="text-lg font-sans text-gray-200 mt-12">
                  Welcome to your go-to resource for reusable UI components. Explore a diverse range
                  of styles and designs to enhance your web projects effortlessly.
                </p>
                <div className="flex gap-4">

                  <button className="font-sans bg-lime-600 hover:bg-lime-700 text-white text-sm font-medium px-5 py-2 rounded-md shadow">
                    Explore
                  </button>
                  <button className="font-sans bg-[#491C25] hover:bg-[#5a1d2e] text-white text-sm font-medium px-5 py-2 rounded-md border border-[#491C25]">
                    Learn More
                  </button>

                </div>

              </div>
            </div>

            {/* Image Section */}
            <div className="w-full mt-[100px]">
              <img
                src={hero} // replace with your actual image path
                alt="Hero visual"
                className=" w-[1000px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>


        {/* playground information */}

        <div className='bg-[#1F050C]'>

          <div className='text-white h-[30vw] flex justify-center items-center'>
            <p>This is playground information</p>
          </div>

        </div>

        {/* information panel */}

        <div className="bg-[#170409] text-white py-16 px-12 space-y-12">

          {/* Section Heading */}
          <div className="font-cormorant text-5xl font-semibold">
            Explore a diverse range of reusable <br />
            UI components for your projects.
          </div>

          {/* Cards Row */}
          <div className="flex flex-row gap-8 justify-between flex-wrap">
            <HomePageCard
              picture={ai}
              heading="Get instant AI insights on code functionality and usage."
              content="Each component comes with ready-to-use code snippets for seamless integration."
              linkText="Learn"
            />
            <HomePageCard
              picture={icon}
              heading="Easily navigate through various components tailored for your design needs"
              content="Our platform simplifies the coding process with clear explanations."
              linkText="Explore"
            />
            <HomePageCard
              picture={snippet}
              heading="Access comprehensive code snippets for every component you choose"
              content="Quickly implement designs with our ready-made HTML, CSS, and JS examples."
              linkText="Copy"
            />
          </div>
        </div>



        {/* small panel */}

        <div className="bg-[#3E0B18] text-white py-24 px-18">
          <div className="flex flex-row items-center justify-between flex-wrap">

            {/* Text Section */}
            <div className="ml-[80px] space-y-4">
              <h2 className="text-3xl font-cormorant font-semibold">Discover Your Perfect UI Components</h2>
              <p className="text-md font-sans text-gray-300">Stay updated and explore our extensive library today!</p>
            </div>

            {/* Buttons Section */}
            <div className="flex gap-4 mr-[100px]">
              <button className="font-sans bg-lime-700 hover:bg-lime-800 text-white text-sm px-5 py-2 rounded-md">
                Explore
              </button>
              <button className="font-sans border border-white text-white text-sm px-5 py-2 rounded-md hover:bg-white hover:text-[#400018]">
                Sign Up
              </button>
            </div>

          </div>
        </div>



        {/* footer */}

        <div className="bg-[#170409] text-white px-8 pt-20 pb-10 text-sm">

          {/* Top section: Logo and Navigation */}
          <div className="flex flex-col md:flex-row items-center justify-between px-24">

            {/* Logo */}
            <div className="text-xl font-semibold font-serif">
              <img src={logo} alt="Logo" className="h-30 w-30 inline-block mr-2" />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 font-semibold ">
              <a href="#" className="font-sans hover:text-gray-300">Home Page</a>
              <a href="#" className="font-sans hover:text-gray-300">Explore</a>
              <a href="#" className="font-sans hover:text-gray-300">Get Creative</a>
            </div>

          </div>

          {/* Horizontal Divider */}
          <hr className="border-gray-600 my-6" />

          {/* Bottom Section */}
          <div className="flex items-center justify-center text-small">
            <p className='font-sans text-sm'>Made with Love. Learn and Grow :)</p>
          </div>

        </div>


      </div>
    // </div>
  );
};

export default HomePage;
