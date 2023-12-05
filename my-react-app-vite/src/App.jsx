import React, { useState, useEffect } from 'react';
import Header from './components/CompanyWebsite/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/CompanyWebsite/Footer';

const App = () => {
  return (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
  );
};

export default App;
