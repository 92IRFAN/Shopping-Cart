import React from "react";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import "./styles/amazon.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Amazon />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  );
};

export default App;
