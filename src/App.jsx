import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import DynamicCompiler from './components/DynamicCompiler.jsx';

import './App.css'



function App() {
  return (
    <div className='w-full h-full absolute bg-[#dfd9d9]'>
      {/* <Sidebar/> */}
      <Navbar/>
      
      
      <div>
        <DynamicCompiler/>
      </div>
      
    </div>
  )
}

export default App
