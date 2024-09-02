// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WebDeveloper from "./components/WebDeveloper";
import AIEngineer from "./components/AIEngineer";
import DataEngineer from "./components/DataEngineer";
import Blogger from "./components/Blogger";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";  // Import Navbar

function App() {
  return (
    <Router>
      {/* Navbar included here to show on all pages */}
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-developer" element={<WebDeveloper />} />
          <Route path="/ai-engineer" element={<AIEngineer />} />
          <Route path="/data-engineer" element={<DataEngineer />} />
          <Route path="/blogger" element={<Blogger />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
