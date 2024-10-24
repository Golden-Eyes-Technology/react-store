import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../home';
import Header from './header';
import Footer from './footer';

const Menu = () => {
  return (
    <>
    <Header/>
    <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  )
}

export default Menu