// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WebDeveloper from "./components/WebDeveloper";
import AIEngineer from "./components/AIEngineer";
import DataEngineer from "./components/DataEngineer";
import Blogger from "./components/Blogger";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-developer" element={<WebDeveloper />} />
          <Route path="/ai-engineer" element={<AIEngineer />} />
          <Route path="/data-engineer" element={<DataEngineer />} />
          <Route path="/blogger" element={<Blogger />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
