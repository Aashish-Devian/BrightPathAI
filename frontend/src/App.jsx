import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import BrightPathAI from "./components/BrightPathAI";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<BrightPathAI />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
