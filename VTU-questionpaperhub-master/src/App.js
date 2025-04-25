import './App.css';

import Footer from './components/Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from './components/context/AuthContext';
import HomePage from './components/HomePage';
import Login from './components/Header/Login';




function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="holder">
      
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
      
       
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
