import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Home from "./Home";
import Location from "./Location";



;
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/location" element={<Location/>} />
    
      

      </Routes>
    </Router>
  );
}

export default App;
