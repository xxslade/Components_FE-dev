import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';

import './App.css'

function App() {
  return (
    <div className='w-full h-full absolute bg-[#0F0F0F]'>
      {/* <Sidebar/> */}
      <Navbar/>
      <div className='text-white flex items-center justify-center'>
          Hello we are starting
      </div>
      
    </div>
  )
}

export default App
