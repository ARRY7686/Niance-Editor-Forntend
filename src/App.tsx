import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routes";
import NewNavbar from "./components/Navbar";
import NewFooter from "./components/Footer";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <NewNavbar />
        <AppRoutes />
        <NewFooter />
      </Router>
    </div>
  );
};

export default App;
