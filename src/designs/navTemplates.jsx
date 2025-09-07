// import { useContext } from "react";
// import { GlobalContext } from '../context/GlobalContext';

// const {gridLength, gridWidth, gridDivision} = useContext(GlobalContext);

const navTemplates = {
  centeredLogo: `
<nav className="bg-gray-800 p-4">
  <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
    <div className="flex space-x-4">
      <a href="#" className="text-white hover:text-gray-400">Home</a>
      <a href="#" className="text-white hover:text-gray-400">About</a>
      <a href="#" className="text-white hover:text-gray-400">Services</a>
      <a href="#" className="text-white hover:text-gray-400">Contact</a>
    </div>
  </div>
</nav>`,

  MinimalistTransparentNavbar: `
<nav className="bg-white shadow p-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <a href="#" className="text-xl font-bold text-gray-800">MyBrand</a>
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
      <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
      <a href="#" className="text-gray-800 hover:text-blue-600">Features</a>
      <a href="#" className="text-gray-800 hover:text-blue-600">Pricing</a>
    </div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
  </div>
</nav>`,

  TaglineCTANavbar: `
<nav className="bg-blue-600 p-4 shadow-lg">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <a href="#" className="text-2xl font-bold text-white">ModernSite</a>
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <a href="#" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-full transition">
        Home
      </a>
      <a href="#" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-full transition">
        Features
      </a>
      <a href="#" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-full transition">
        Contact
      </a>
    </div>
  </div>
</nav>`
};

export default navTemplates;

