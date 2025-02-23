import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 min-h-screen">
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;


