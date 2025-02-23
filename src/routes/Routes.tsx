import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import Editor from "../pages/Editor";
import Team from "../pages/Team";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/team" element={<Team />} />
      <Route path="/project" element={<Editor/>} />
      <Route path="/contribute" element={<h1>Contribute</h1>} />
    </Routes>
  );
};

export default AppRoutes;