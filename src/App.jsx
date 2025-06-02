import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/HomePage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className='w-full h-screen flex flex-col bg-[#dfd9d9]'>
       
        <Navbar />

        <div className='flex-1 flex'>
          <Sidebar />
        
        <div className='flex-1 p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
