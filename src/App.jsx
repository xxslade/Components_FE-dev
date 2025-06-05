import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import HomePage from './pages/HomePage.jsx';
import CardPage from './pages/CardPage.jsx';
import NavPage from './pages/NavPage.jsx';
import ButtonPage from './pages/ButtonPage.jsx';
import ChatBox from './components/ChatBox.jsx';
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
              <Route path="/" element={<HomePage />} />
              <Route path="/buttons" element={<ButtonPage />} />
              <Route path="/cards" element={<CardPage />} />
              <Route path="/navbars" element={<NavPage />} />
            </Routes>
          </div>
        </div>
        <ChatBox />
      </div>
    </Router>
  );
}

export default App;
