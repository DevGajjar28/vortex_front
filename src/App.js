// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import RegisterForm from './Components/RegisterForm';
import React, { createContext } from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from "./components/Navbar";
import Advertise from "./pages/Advertise";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import Registration from "./pages/Registration"
import Contact from "./pages/Contact";
import Ads from "./components/Ads";
import History from "./pages/History";
import About from "./pages/About";
import Contribute from "./pages/Contribute";




export const ImageContext = createContext();

function App() {


  function Layout({ children }) {
    return (
      <div className="App">
        <Navbar />
        {/* <Footer /> */}
        <div>
          {children}
        </div>
      </div>
    );
  }
  return (
    <>


      <Routes>

        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Inspiration" element={<Layout><Inspiration /></Layout>} />
        <Route path="/Advertise" element={<Layout><Advertise /></Layout>} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Ads" element={<Ads />} />
        <Route path="/History" element={<History />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contribute" element={<Layout><Contribute /></Layout>} />






        


      </Routes>

    </>


  );
}

export default App;
