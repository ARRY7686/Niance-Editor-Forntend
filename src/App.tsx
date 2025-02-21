import React from "react";

import CodeEditor from "./components/CodeEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 h-screen">
      <Router>
        
        <Routes>
          <Route path="/" element={<CodeEditor/>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/Try it Now" element={<h1>Editor</h1>} />
          <Route path="/contribute" element={<h1>Contribute</h1>} />
        </Routes>
      </Router>
 
    </div>
  );
};

export default App;


