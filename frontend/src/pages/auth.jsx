import React, { useState } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/auth/login';
import Register from '../components/auth/register';




const Auth = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  
  return (
    <div className='max-w-[500px] mx-auto mt-40'>
      <Routes>
        <Route path="/" element={<Navigate to="register" />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <button className='my-2 text-blue-400 font-semibold' onClick={() => setIsAuthenticated(!isAuthenticated)}>{isAuthenticated ? (<Link to="register">Don't you have an account? Sign up</Link>) : (<Link to="login">Do you have an account? Log in</Link>)}</button>

    </div>
  );
};

export default Auth;
