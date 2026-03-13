import React from "react";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Make sure to save the Footer code I gave you in components/Footer.jsx
import Home from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Application from "./pages/Application";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/gallery"; // Recommended for multi-page React apps

function App() {
  return (

      
      
      <div className="flex flex-col min-h-screen">
       
        <Navbar />
        
{/* Automatically scrolls to top when you change pages */}
      <ScrollToTop /> 
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/application" element={<Application />} />
          </Routes>
        </main>

        <Footer />
      </div>
  
  );
}

export default App;