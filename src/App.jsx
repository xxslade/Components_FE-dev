import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import HomePage from './pages/HomePage.jsx';
import CardPage from './pages/CardPage.jsx';
import NavPage from './pages/NavPage.jsx';
import ButtonPage from './pages/ButtonPage.jsx';
import ChatBox from './components/ChatBox.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import './App.css';
import { useState } from 'react';
import GlobalProvider from './context/GlobalProvider.jsx';
import PlaygroundPage from './pages/PlaygroundPage.jsx';


function App() {
  

  return (
    <GlobalProvider>
      <Router>
        <div className='w-full flex flex-col bg-[#dfd9d9]'>

          <Navbar />

          <div className='flex-1 flex'>
            <Sidebar />

          <div className='flex-1'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/buttons" element={<ButtonPage />} />
              <Route path="/cards" element={<CardPage />} />
              <Route path="/navbars" element={<NavPage />} />
              <Route path="/signup" element={<SignupPage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/playground" element={<PlaygroundPage/>} />
            </Routes>
          </div>

          <ChatBox />
        </div>
    <ToastContainer/>
    </div>
    </Router>
    </GlobalProvider>
  );
}

export default App;
