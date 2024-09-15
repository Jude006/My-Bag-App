import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import CartProvider from './Cart Folder/CartProvider';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import FadeLoader from "react-spinners/FadeLoader";

// Simple Loader Component
function Loader({ isLoading }) {
  return isLoading ? (
    <div className="flex justify-center items-center h-screen w-full bg-black bg-opacity-30">
      <FadeLoader color="#274591" size={150} />
    </div>
  ) : null;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation(); // To detect page changes

  // This useEffect runs every time we change pages
  useEffect(() => {
    setIsLoading(true); // Start the loader
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop the loader after 1 second
    }, 1000); // Change this to whatever time you like

    return () => clearTimeout(timer); // Clean up the timer
  }, [location]); // Only run when the location (page) changes

  return (
    <>
      <Loader isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
}

export default WrappedApp;
