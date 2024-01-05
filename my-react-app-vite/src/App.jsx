import React, { useState, useEffect } from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/MiniContext/Login';
import Profile from './components/MiniContext/Profile';

const App = () => {
  return (
        <UserContextProvider>
          <Profile/>
          <Login/>
        </UserContextProvider>
  );
};

export default App;
