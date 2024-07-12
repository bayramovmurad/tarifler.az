import React, { useState } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated } from '../redux/user/userSlice';



const Auth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.user);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="register" />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    
      <button onClick={() => dispatch(setIsAuthenticated(!isAuthenticated))}>{isAuthenticated ? (<Link to="register">register</Link>) : (<Link to="login">login</Link>)}</button>

    </div>
  );
};

export default Auth;
