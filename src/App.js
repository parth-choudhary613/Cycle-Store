import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Home from "./Home";
import Location from "./Location";

function App() {
  return (
    <Router>
      {/* Navbar outside Routes so it appears on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
