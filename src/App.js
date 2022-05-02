import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/Sign-up";
import Footer from "./components/Footer";


function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  exact element={<Home/>}/>
          <Route path="/services"  exact element={<Services/>}/>
          <Route path="/products"  exact element={<Products/>}/>
          <Route path="/sign-up"  exact element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
    
  );
}

export default App;
