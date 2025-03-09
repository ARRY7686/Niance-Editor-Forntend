import React from "react";
import { Routes, Route } from "react-router-dom";
import Editor from "../pages/Editor";
import Team from "../pages/Team";
import LandingPage from "@/pages/LandingPage";
import Contributions from "@/pages/Contributions";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/project" element={<Editor />} />
      <Route path="/contribute" element={<Contributions />} />
    </Routes>
  );
};

export default AppRoutes;
