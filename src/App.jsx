import './App.css';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './Component/Login';
import Register from './Component/Register';
import Profile from './Component/Profile';
// import { auth } from './Component/firebase';

function App() {
 



  return (
  
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
          <Route path='/' element={<Login/>}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={< Register />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
